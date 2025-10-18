import { useState } from "react";
import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  GripVertical,
  Loader,
  CircleCheck,
  EllipsisVertical,
  ChevronDown,
  Columns2,
  Plus,
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  Pencil,
  Trash2,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import { tableData, type TableRowData, availableReviewers } from "../data/mockData";
import { EditPaymentDialog } from "./EditPaymentDialog";
import { DeletePaymentDialog } from "./DeletePaymentDialog";
import { BatchDeleteDialog } from "./BatchDeleteDialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/**
 * PayrollTable Component
 * Complex component with table, tabs, pagination, and row selection
 */
export function PayrollTable() {
  const [activeTab, setActiveTab] = useState("outline");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortColumn, setSortColumn] = useState<keyof TableRowData | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [visibleColumns, setVisibleColumns] = useState({
    type: true,
    status: true,
    target: true,
    limit: true,
    reviewer: true,
  });
  const [isAddSectionOpen, setIsAddSectionOpen] = useState(false);
  const [newSectionName, setNewSectionName] = useState("");
  const [reviewerAssignments, setReviewerAssignments] = useState<Record<number, string>>({});

  // Filter data by active tab
  const filteredData = tableData.filter((row) => row.category === activeTab);

  // Sort data
  const sortedData = React.useMemo(() => {
    if (!sortColumn) return filteredData;

    return [...filteredData].sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      if (aValue === null) return 1;
      if (bValue === null) return -1;

      if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
      if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortColumn, sortDirection]);

  // Paginate data
  const totalPages = Math.ceil(sortedData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = sortedData.slice(startIndex, endIndex);

  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    new Array(paginatedData.length).fill(false)
  );

  React.useEffect(() => {
    setCheckedItems(new Array(paginatedData.length).fill(false));
  }, [paginatedData.length, currentPage]);

  const handleCheckboxChange = (index: number, checked: boolean) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = checked;
    setCheckedItems(newCheckedItems);
  };

  const selectedCount = checkedItems.filter(Boolean).length;

  const handleBatchDelete = () => {
    console.log("Batch delete", selectedCount, "items");
    setCheckedItems(new Array(paginatedData.length).fill(false));
  };

  const handleDeletePayment = (index: number) => {
    console.log("Delete payment at index", index);
  };

  const handleEditPayment = (
    index: number,
    data: {
      employee: string;
      payoutMethod: string;
      wallet: string;
      network: string;
      currency: string;
      amount: string;
    }
  ) => {
    console.log("Edit payment at index", index, "with data", data);
  };

  const handleSort = (column: keyof TableRowData) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const handleRowsPerPageChange = (value: string) => {
    setRowsPerPage(Number(value));
    setCurrentPage(1);
  };

  const toggleColumn = (column: keyof typeof visibleColumns) => {
    setVisibleColumns((prev) => ({
      ...prev,
      [column]: !prev[column],
    }));
  };

  const handleAddSection = () => {
    if (newSectionName.trim()) {
      console.log("Adding new section:", newSectionName);
      // Here you would add logic to add the new section to your data
      setNewSectionName("");
      setIsAddSectionOpen(false);
    }
  };

  const renderStatusBadge = (status: string) => {
    return (
      <Badge variant="outline" className="flex items-center gap-1 w-fit">
        {status === "done" ? (
          <>
            <CircleCheck className="h-3 w-3 text-green-500" />
            Done
          </>
        ) : (
          <>
            <Loader className="h-3 w-3" />
            In Process
          </>
        )}
      </Badge>
    );
  };

  const handleAssignReviewer = (rowId: number, reviewerName: string) => {
    setReviewerAssignments((prev) => ({
      ...prev,
      [rowId]: reviewerName,
    }));
  };

  const renderReviewerCell = (row: TableRowData) => {
    const assignedReviewer = reviewerAssignments[row.id] || row.reviewer;

    if (assignedReviewer) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-auto p-0 hover:underline">
              {assignedReviewer}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuLabel>Change reviewer</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {availableReviewers.map((reviewer) => (
              <DropdownMenuItem
                key={reviewer}
                onClick={() => handleAssignReviewer(row.id, reviewer)}
              >
                {reviewer}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">
            Assign reviewer
            <ChevronDown className="w-4 h-4 ml-1" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuLabel>Select reviewer</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {availableReviewers.map((reviewer) => (
            <DropdownMenuItem
              key={reviewer}
              onClick={() => handleAssignReviewer(row.id, reviewer)}
            >
              {reviewer}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Filters and Actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 pb-4 sm:pb-6">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full sm:w-auto">
          <TabsList className="grid w-full grid-cols-2 sm:inline-flex sm:w-auto bg-muted p-1 rounded-lg h-auto">
            <TabsTrigger value="outline" className="px-2 py-1.5 sm:py-1 rounded-md text-xs sm:text-sm">
              Outline
            </TabsTrigger>
            <TabsTrigger
              value="past-performance"
              className="px-2 py-1.5 sm:py-1 rounded-md flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"
            >
              <span className="hidden sm:inline">Past Performance</span>
              <span className="sm:hidden">Past Perf.</span>
              <Badge variant="secondary" className="text-[10px] sm:text-xs px-1 py-0">
                {tableData.filter((r) => r.category === "past-performance").length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger
              value="key-personnel"
              className="px-2 py-1.5 sm:py-1 rounded-md flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"
            >
              <span className="hidden sm:inline">Key Personnel</span>
              <span className="sm:hidden">Personnel</span>
              <Badge variant="secondary" className="text-[10px] sm:text-xs px-1 py-0">
                {tableData.filter((r) => r.category === "key-personnel").length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="focus-documents" className="px-2 py-1.5 sm:py-1 rounded-md text-xs sm:text-sm">
              <span className="hidden sm:inline">Focus Documents</span>
              <span className="sm:hidden">Documents</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex items-center gap-2 w-full sm:w-auto flex-wrap sm:flex-nowrap">
          {selectedCount > 0 && (
            <BatchDeleteDialog count={selectedCount} onDelete={handleBatchDelete}>
              <Button variant="destructive" size="sm" className="flex items-center gap-2">
                <Trash2 className="w-4 h-4" />
                Delete Selected ({selectedCount})
              </Button>
            </BatchDeleteDialog>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-1 sm:gap-2">
                <Columns2 className="w-4 h-4" />
                <span className="hidden sm:inline">Customize Columns</span>
                <span className="sm:hidden">Columns</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Toggle Columns</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={visibleColumns.type}
                onCheckedChange={() => toggleColumn("type")}
              >
                Section Type
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={visibleColumns.status}
                onCheckedChange={() => toggleColumn("status")}
              >
                Status
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={visibleColumns.target}
                onCheckedChange={() => toggleColumn("target")}
              >
                Target
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={visibleColumns.limit}
                onCheckedChange={() => toggleColumn("limit")}
              >
                Limit
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={visibleColumns.reviewer}
                onCheckedChange={() => toggleColumn("reviewer")}
              >
                Reviewer
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Dialog open={isAddSectionOpen} onOpenChange={setIsAddSectionOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-1 sm:gap-2">
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline">Add Section</span>
                <span className="sm:hidden">Add</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Section</DialogTitle>
                <DialogDescription>
                  Create a new section for your payroll document.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="section-name">Section Name</Label>
                  <Input
                    id="section-name"
                    placeholder="Enter section name..."
                    value={newSectionName}
                    onChange={(e) => setNewSectionName(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleAddSection();
                      }
                    }}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsAddSectionOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" onClick={handleAddSection}>
                  Add Section
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-md border overflow-x-auto">
        <Table className="min-w-[800px]">
          <TableHeader>
            <TableRow>
              <TableHead className="w-11">
                <Button variant="ghost" size="sm">
                  <GripVertical className="w-4 h-4 text-muted-foreground" />
                </Button>
              </TableHead>
              <TableHead className="w-14">
                <Checkbox />
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSort("header")}
                  className="flex items-center gap-1"
                >
                  Header
                  {sortColumn === "header" ? (
                    sortDirection === "asc" ? (
                      <ArrowUp className="w-4 h-4" />
                    ) : (
                      <ArrowDown className="w-4 h-4" />
                    )
                  ) : (
                    <ArrowUpDown className="w-4 h-4 opacity-50" />
                  )}
                </Button>
              </TableHead>
              {visibleColumns.type && (
                <TableHead>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort("type")}
                    className="flex items-center gap-1"
                  >
                    Section Type
                    {sortColumn === "type" ? (
                      sortDirection === "asc" ? (
                        <ArrowUp className="w-4 h-4" />
                      ) : (
                        <ArrowDown className="w-4 h-4" />
                      )
                    ) : (
                      <ArrowUpDown className="w-4 h-4 opacity-50" />
                    )}
                  </Button>
                </TableHead>
              )}
              {visibleColumns.status && (
                <TableHead>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort("status")}
                    className="flex items-center gap-1"
                  >
                    Status
                    {sortColumn === "status" ? (
                      sortDirection === "asc" ? (
                        <ArrowUp className="w-4 h-4" />
                      ) : (
                        <ArrowDown className="w-4 h-4" />
                      )
                    ) : (
                      <ArrowUpDown className="w-4 h-4 opacity-50" />
                    )}
                  </Button>
                </TableHead>
              )}
              {visibleColumns.target && <TableHead>Target</TableHead>}
              {visibleColumns.limit && <TableHead>Limit</TableHead>}
              {visibleColumns.reviewer && (
                <TableHead>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort("reviewer")}
                    className="flex items-center gap-1"
                  >
                    Reviewer
                    {sortColumn === "reviewer" ? (
                      sortDirection === "asc" ? (
                        <ArrowUp className="w-4 h-4" />
                      ) : (
                        <ArrowDown className="w-4 h-4" />
                      )
                    ) : (
                      <ArrowUpDown className="w-4 h-4 opacity-50" />
                    )}
                  </Button>
                </TableHead>
              )}
              <TableHead className="w-15"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((row: TableRowData, index: number) => (
              <TableRow key={index}>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <GripVertical className="w-4 h-4 text-muted-foreground" />
                  </Button>
                </TableCell>
                <TableCell>
                  <Checkbox
                    checked={checkedItems[index]}
                    onCheckedChange={(checked) =>
                      handleCheckboxChange(index, checked as boolean)
                    }
                  />
                </TableCell>
                <TableCell className="font-medium">{row.header}</TableCell>
                {visibleColumns.type && (
                  <TableCell>
                    <Badge variant="outline">{row.type}</Badge>
                  </TableCell>
                )}
                {visibleColumns.status && <TableCell>{renderStatusBadge(row.status)}</TableCell>}
                {visibleColumns.target && <TableCell>{row.target}</TableCell>}
                {visibleColumns.limit && <TableCell>{row.limit}</TableCell>}
                {visibleColumns.reviewer && <TableCell>{renderReviewerCell(row)}</TableCell>}
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <EllipsisVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <EditPaymentDialog
                        onSave={(data) => handleEditPayment(index, data)}
                      >
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                          <Pencil className="mr-2 h-4 w-4" />
                          Edit Payment
                        </DropdownMenuItem>
                      </EditPaymentDialog>
                      <DeletePaymentDialog
                        onDelete={() => handleDeletePayment(index)}
                      >
                        <DropdownMenuItem
                          onSelect={(e) => e.preventDefault()}
                          className="text-destructive"
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete Payment
                        </DropdownMenuItem>
                      </DeletePaymentDialog>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
        <p className="text-xs sm:text-sm text-muted-foreground order-2 sm:order-1">
          {selectedCount} of {sortedData.length} row(s) selected.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full sm:w-auto order-1 sm:order-2">
          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
            <span className="text-xs sm:text-sm font-medium whitespace-nowrap">Rows per page</span>
            <Select value={String(rowsPerPage)} onValueChange={handleRowsPerPageChange}>
              <SelectTrigger className="w-16 sm:w-20 h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs sm:text-sm font-medium whitespace-nowrap">
              Page {currentPage} of {totalPages || 1}
            </span>
            <div className="flex items-center gap-1 sm:gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 hidden sm:flex"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(1)}
              >
                <ChevronsLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 hidden sm:flex"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(totalPages)}
              >
                <ChevronsRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
