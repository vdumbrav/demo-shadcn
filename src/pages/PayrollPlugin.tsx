import { useState } from "react"
import { useTheme } from "@/context/theme-context"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { SidebarProvider, Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarTrigger } from "@/components/ui/sidebar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import {
  GalleryVerticalEnd,
  ChevronsUpDown,
  SquareTerminal,
  Bot,
  BookOpen,
  Settings2,
  Frame,
  PieChart,
  Map,
  Ellipsis,
  ChevronDown,
  TrendingUp,
  TrendingDown,
  Columns2,
  Plus,
  Bold,
  GripVertical,
  Loader,
  CircleCheck,
  EllipsisVertical,
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight
} from "lucide-react"

const chartData = [
  { name: "Mar 3", value: 186 },
  { name: "Mar 22", value: 305 },
  { name: "Feb 23", value: 237 },
  { name: "Mar 17", value: 273 },
  { name: "Mar 1", value: 209 },
  { name: "Mar 14", value: 214 },
]

const chartConfig = {
  value: {
    label: "Visitors",
    color: "hsl(var(--primary))",
  },
}

export default function PayrollPlugin() {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(11).fill(false))
  const { theme, setTheme } = useTheme()

  const handleCheckboxChange = (index: number, checked: boolean) => {
    const newCheckedItems = [...checkedItems]
    newCheckedItems[index] = checked
    setCheckedItems(newCheckedItems)
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <Sidebar className="bg-sidebar">
        <SidebarHeader className="p-2 bg-sidebar">
          <SidebarMenuButton className="flex items-center gap-2 p-2 rounded-md h-12">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-sidebar-primary">
              <GalleryVerticalEnd className="w-4 h-4 text-sidebar-primary-foreground" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-semibold text-sidebar-foreground">Documentation</span>
              <span className="text-xs text-sidebar-foreground">v1.0.1</span>
            </div>
            <ChevronsUpDown className="w-4 h-4 text-sidebar-foreground ml-auto" />
          </SidebarMenuButton>
        </SidebarHeader>

        <SidebarContent className="gap-2">
          <SidebarGroup>
            <SidebarGroupLabel className="px-2 h-8 rounded-md opacity-70">
              <span className="text-xs font-medium text-sidebar-foreground">Platform</span>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton className="flex items-center gap-2 px-2 py-2 h-8 rounded-md">
                    <SquareTerminal className="w-4 h-4 text-sidebar-foreground" />
                    <span className="text-sm text-sidebar-foreground">Playground</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton className="flex items-center gap-2 px-2 py-2 h-8 rounded-md">
                    <Bot className="w-4 h-4 text-sidebar-foreground" />
                    <span className="text-sm text-sidebar-foreground">Payroll & Expenses</span>
                  </SidebarMenuButton>
                  <SidebarMenuSub className="pl-6 py-0.5 border-l border-sidebar-border">
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton className="px-2 h-7 rounded-md bg-sidebar-accent">
                        <span className="text-sm text-sidebar-accent-foreground">Payroll</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton className="px-2 h-7 rounded-md">
                        <span className="text-sm text-sidebar-foreground">Sub Menu Item</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton className="px-2 h-7 rounded-md">
                        <span className="text-sm text-sidebar-foreground">Sub Menu Item</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton className="px-2 h-7 rounded-md">
                        <span className="text-sm text-sidebar-foreground">Sub Menu Item</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton className="px-2 h-7 rounded-md">
                        <span className="text-sm text-sidebar-foreground">Sub Menu Item</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton className="flex items-center gap-2 px-2 py-2 h-8 rounded-md">
                    <BookOpen className="w-4 h-4 text-sidebar-foreground" />
                    <span className="text-sm text-sidebar-foreground">Documentation</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton className="flex items-center gap-2 px-2 py-2 h-8 rounded-md">
                    <Settings2 className="w-4 h-4 text-sidebar-foreground" />
                    <span className="text-sm text-sidebar-foreground">Settings</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel className="px-2 h-8 rounded-md opacity-70">
              <span className="text-xs font-medium text-sidebar-foreground">Projects</span>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton className="flex items-center gap-2 px-2 py-2 h-8 rounded-md">
                    <Frame className="w-4 h-4 text-sidebar-foreground" />
                    <span className="text-sm text-sidebar-foreground">Design Engineering</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton className="flex items-center gap-2 px-2 py-2 h-8 rounded-md">
                    <PieChart className="w-4 h-4 text-sidebar-foreground" />
                    <span className="text-sm text-sidebar-foreground">Sales & Marketing</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton className="flex items-center gap-2 px-2 py-2 h-8 rounded-md">
                    <Map className="w-4 h-4 text-sidebar-foreground" />
                    <span className="text-sm text-sidebar-foreground">Travel</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem className="opacity-70">
                  <SidebarMenuButton className="flex items-center gap-2 px-2 py-2 h-8 rounded-md">
                    <Ellipsis className="w-4 h-4 text-sidebar-foreground" />
                    <span className="text-sm text-sidebar-foreground">More</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="p-2 bg-sidebar">
          <SidebarMenuButton className="flex items-center gap-2 p-2 rounded-md h-12">
            <Avatar className="w-8 h-8 rounded-lg">
              <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
            </Avatar>
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-semibold text-sidebar-foreground">shadcn</span>
              <span className="text-xs text-sidebar-foreground">m@example.com</span>
            </div>
            <ChevronsUpDown className="w-4 h-4 text-sidebar-foreground ml-auto" />
          </SidebarMenuButton>
        </SidebarFooter>
      </Sidebar>

      <div className="flex-1 p-2">
        <div className="bg-background rounded-xl shadow-lg h-full flex flex-col">
          <header className="flex items-center justify-between px-6 h-12 border-b border-border">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="w-7 h-7 rounded-md" />
              <Separator orientation="vertical" className="h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-sm text-foreground">Payroll</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost">GitHub</Button>
              <Select value={theme} onValueChange={(value) => setTheme(value as 'light' | 'dark' | 'system')}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
              <Button>Start Payroll</Button>
            </div>
          </header>

          <div className="flex-1 p-6 overflow-auto">
            <div className="space-y-6">
              <div className="grid grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="pb-6">
                    <div className="space-y-1.5">
                      <div className="flex items-start justify-between">
                        <p className="text-sm text-muted-foreground">Total Revenue</p>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <TrendingUp className="h-3 w-3" />
                          +12,5%
                        </Badge>
                      </div>
                      <p className="text-3xl font-semibold text-card-foreground">$15,231.89</p>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-card-foreground">Trending up this month</p>
                        <TrendingUp className="w-4 h-4 text-card-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground">Visitors for the last 6 months</p>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader className="pb-6">
                    <div className="space-y-1.5">
                      <div className="flex items-start justify-between">
                        <p className="text-sm text-muted-foreground">New Customers</p>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <TrendingDown className="h-3 w-3" />
                          -20%
                        </Badge>
                      </div>
                      <p className="text-3xl font-semibold text-card-foreground">1,234</p>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-card-foreground">Down 20% this period</p>
                        <TrendingUp className="w-4 h-4 text-card-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground">Acquisition needs attention</p>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader className="pb-6">
                    <div className="space-y-1.5">
                      <div className="flex items-start justify-between">
                        <p className="text-sm text-muted-foreground">Active Accounts</p>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <TrendingUp className="h-3 w-3" />
                          +12,5%
                        </Badge>
                      </div>
                      <p className="text-3xl font-semibold text-card-foreground">45,678</p>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-card-foreground">Strong user retention</p>
                        <TrendingUp className="w-4 h-4 text-card-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground">Engagement exceed targets</p>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader className="pb-6">
                    <div className="space-y-1.5">
                      <div className="flex items-start justify-between">
                        <p className="text-sm text-muted-foreground">Growth Rate</p>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <TrendingUp className="h-3 w-3" />
                          +4.5%
                        </Badge>
                      </div>
                      <p className="text-3xl font-semibold text-card-foreground">4.5%</p>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-card-foreground">Steady performance increase</p>
                        <TrendingUp className="w-4 h-4 text-card-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground">Meets growth projections</p>
                    </div>
                  </CardHeader>
                </Card>
              </div>

              <Card>
                <CardHeader className="pb-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1.5">
                      <h3 className="text-base text-card-foreground">Total Visitors</h3>
                      <p className="text-sm text-muted-foreground">Total for the last 3 months</p>
                    </div>
                    <ToggleGroup type="single" defaultValue="last-3-months">
                      <ToggleGroupItem value="last-3-months" variant="outline">Last 3 months</ToggleGroupItem>
                      <ToggleGroupItem value="last-30-days" variant="outline">Last 30 days</ToggleGroupItem>
                      <ToggleGroupItem value="bold" variant="outline">
                        <Bold className="w-4 h-4" />
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-56 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData}>
                        <defs>
                          <linearGradient id="fillValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4} />
                            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis hide />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Area
                          type="monotone"
                          dataKey="value"
                          stroke="hsl(var(--primary))"
                          fillOpacity={1}
                          fill="url(#fillValue)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <div className="flex items-center justify-between pb-6">
                  <Tabs defaultValue="outline" className="w-auto">
                    <TabsList className="bg-muted p-1 rounded-lg">
                      <TabsTrigger value="outline" className="px-2 py-1 rounded-md">Outline</TabsTrigger>
                      <TabsTrigger value="past-performance" className="px-2 py-1 rounded-md flex items-center gap-2">
                        Past Performance
                        <Badge variant="secondary">3</Badge>
                      </TabsTrigger>
                      <TabsTrigger value="key-personnel" className="px-2 py-1 rounded-md flex items-center gap-2">
                        Key Personnel
                        <Badge variant="secondary">2</Badge>
                      </TabsTrigger>
                      <TabsTrigger value="focus-documents" className="px-2 py-1 rounded-md">Focus Documents</TabsTrigger>
                    </TabsList>
                  </Tabs>
                  <div className="flex items-center gap-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          <Columns2 className="w-4 h-4" />
                          Customize Columns
                          <ChevronDown className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                    </DropdownMenu>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Plus className="w-4 h-4" />
                      Add Section
                    </Button>
                  </div>
                </div>

                <div className="rounded-md border">
                  <Table>
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
                        <TableHead>Header</TableHead>
                        <TableHead>Section Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Target</TableHead>
                        <TableHead>Limit</TableHead>
                        <TableHead>Reviewer</TableHead>
                        <TableHead className="w-15"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { header: "Cover Page", type: "Cover Page", status: "in-process", target: "23", limit: "32", reviewer: "Jamik Tashpulatov" },
                        { header: "Table of contents", type: "Table of Contents", status: "done", target: "45", limit: "8", reviewer: "Jamik Tashpulatov" },
                        { header: "Executive summary", type: "Technical Content", status: "done", target: "45", limit: "45", reviewer: "Jamik Tashpulatov" },
                        { header: "Technical approach", type: "Cover Page", status: "in-process", target: "45", limit: "45", reviewer: "Eddie Lake" },
                        { header: "Design", type: "Cover Page", status: "in-process", target: "23", limit: "23", reviewer: "Eddie Lake" },
                        { header: "Capabilities", type: "Narrative", status: "done", target: "23", limit: "23", reviewer: "Eddie Lake" },
                        { header: "Integration with existing systems", type: "Technical Content", status: "in-process", target: "23", limit: "23", reviewer: "Eddie Lake" },
                        { header: "Innovation and Advantages", type: "Table of Contents", status: "done", target: "8", limit: "45", reviewer: "Eddie Lake" },
                        { header: "Overview of EMR's Innovative Solutions", type: "Narrative", status: "done", target: "23", limit: "23", reviewer: null },
                        { header: "Advanced Algorithms and Machine Learning", type: "Table of Contents", status: "in-process", target: "89", limit: "23", reviewer: null },
                      ].map((row, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <Button variant="ghost" size="sm">
                              <GripVertical className="w-4 h-4 text-muted-foreground" />
                            </Button>
                          </TableCell>
                          <TableCell>
                            <Checkbox
                              checked={checkedItems[index]}
                              onCheckedChange={(checked) => handleCheckboxChange(index, checked as boolean)}
                            />
                          </TableCell>
                          <TableCell className="font-medium">{row.header}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{row.type}</Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="flex items-center gap-1 w-fit">
                              {row.status === "done" ? (
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
                          </TableCell>
                          <TableCell>{row.target}</TableCell>
                          <TableCell>{row.limit}</TableCell>
                          <TableCell>
                            {row.reviewer ? (
                              row.reviewer
                            ) : (
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="outline" disabled className="opacity-50">
                                    Assign reviewer
                                    <ChevronDown className="w-4 h-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                              </DropdownMenu>
                            )}
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="icon">
                              <EllipsisVertical className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="flex items-center justify-center pt-4">
                  <div className="flex items-center justify-between w-full">
                    <p className="text-sm text-muted-foreground">0 of 68 row(s) selected.</p>
                    <div className="flex items-center gap-8">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">Rows per page</span>
                        <Select defaultValue="10">
                          <SelectTrigger className="w-20">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="10">10</SelectItem>
                            <SelectItem value="20">20</SelectItem>
                            <SelectItem value="50">50</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <span className="text-sm font-medium">Page 1 of 7</span>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon" disabled className="opacity-50">
                          <ChevronsLeft className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="icon" disabled className="opacity-50">
                          <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <ChevronsRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </SidebarProvider>
  )
}
