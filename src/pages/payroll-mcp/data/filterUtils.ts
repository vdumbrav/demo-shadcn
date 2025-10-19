import { type TableRowData } from "./mockData";

export interface FilterOptions {
  searchTerm: string;
  statusFilter: "all" | "done" | "in-process";
  typeFilter: string[];
  reviewerFilter: "assigned" | "unassigned" | "all";
  targetRange: { min: number; max: number };
}

/**
 * Advanced filtering utilities for table data
 */

/**
 * Apply all filters to the data
 */
export const applyFilters = (
  data: TableRowData[],
  filters: FilterOptions
): TableRowData[] => {
  return data.filter((row) => {
    // Search filter
    if (
      filters.searchTerm &&
      !row.header.toLowerCase().includes(filters.searchTerm.toLowerCase())
    ) {
      return false;
    }

    // Status filter
    if (filters.statusFilter !== "all" && row.status !== filters.statusFilter) {
      return false;
    }

    // Type filter
    if (filters.typeFilter.length > 0 && !filters.typeFilter.includes(row.type)) {
      return false;
    }

    // Reviewer filter
    if (filters.reviewerFilter === "assigned" && !row.reviewer) {
      return false;
    }
    if (filters.reviewerFilter === "unassigned" && row.reviewer) {
      return false;
    }

    // Target range filter
    const target = parseInt(row.target);
    if (target < filters.targetRange.min || target > filters.targetRange.max) {
      return false;
    }

    return true;
  });
};

/**
 * Get unique values for filter options
 */
export const getFilterOptions = (data: TableRowData[]) => {
  return {
    types: [...new Set(data.map((row) => row.type))],
    statuses: ["done", "in-process"],
  };
};

/**
 * Reset all filters to default values
 */
export const getDefaultFilters = (): FilterOptions => ({
  searchTerm: "",
  statusFilter: "all",
  typeFilter: [],
  reviewerFilter: "all",
  targetRange: { min: 0, max: 100 },
});
