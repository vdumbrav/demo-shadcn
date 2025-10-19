import { useState } from 'react';
import { useTheme } from '@/context/theme-context';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
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
  ChevronsRight,
} from 'lucide-react';

const chartData = [
  { name: 'Mar 3', value: 186 },
  { name: 'Mar 22', value: 305 },
  { name: 'Feb 23', value: 237 },
  { name: 'Mar 17', value: 273 },
  { name: 'Mar 1', value: 209 },
  { name: 'Mar 14', value: 214 },
];

const chartConfig = {
  value: {
    label: 'Visitors',
    color: 'hsl(var(--primary))',
  },
};

export default function PayrollPlugin() {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(11).fill(false));
  const { theme, setTheme } = useTheme();

  const handleCheckboxChange = (index: number, checked: boolean) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = checked;
    setCheckedItems(newCheckedItems);
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <Sidebar className="bg-sidebar">
          <SidebarHeader className="bg-sidebar p-2">
            <SidebarMenuButton className="flex h-12 items-center gap-2 rounded-md p-2">
              <div className="bg-sidebar-primary flex h-8 w-8 items-center justify-center rounded-lg">
                <GalleryVerticalEnd className="text-sidebar-primary-foreground h-4 w-4" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-sidebar-foreground text-sm font-semibold">Documentation</span>
                <span className="text-sidebar-foreground text-xs">v1.0.1</span>
              </div>
              <ChevronsUpDown className="text-sidebar-foreground ml-auto h-4 w-4" />
            </SidebarMenuButton>
          </SidebarHeader>

          <SidebarContent className="gap-2">
            <SidebarGroup>
              <SidebarGroupLabel className="h-8 rounded-md px-2 opacity-70">
                <span className="text-sidebar-foreground text-xs font-medium">Platform</span>
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="flex h-8 items-center gap-2 rounded-md px-2 py-2">
                      <SquareTerminal className="text-sidebar-foreground h-4 w-4" />
                      <span className="text-sidebar-foreground text-sm">Playground</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="flex h-8 items-center gap-2 rounded-md px-2 py-2">
                      <Bot className="text-sidebar-foreground h-4 w-4" />
                      <span className="text-sidebar-foreground text-sm">Payroll & Expenses</span>
                    </SidebarMenuButton>
                    <SidebarMenuSub className="border-sidebar-border border-l py-0.5 pl-6">
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton className="bg-sidebar-accent h-7 rounded-md px-2">
                          <span className="text-sidebar-accent-foreground text-sm">Payroll</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton className="h-7 rounded-md px-2">
                          <span className="text-sidebar-foreground text-sm">Sub Menu Item</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton className="h-7 rounded-md px-2">
                          <span className="text-sidebar-foreground text-sm">Sub Menu Item</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton className="h-7 rounded-md px-2">
                          <span className="text-sidebar-foreground text-sm">Sub Menu Item</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton className="h-7 rounded-md px-2">
                          <span className="text-sidebar-foreground text-sm">Sub Menu Item</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="flex h-8 items-center gap-2 rounded-md px-2 py-2">
                      <BookOpen className="text-sidebar-foreground h-4 w-4" />
                      <span className="text-sidebar-foreground text-sm">Documentation</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="flex h-8 items-center gap-2 rounded-md px-2 py-2">
                      <Settings2 className="text-sidebar-foreground h-4 w-4" />
                      <span className="text-sidebar-foreground text-sm">Settings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel className="h-8 rounded-md px-2 opacity-70">
                <span className="text-sidebar-foreground text-xs font-medium">Projects</span>
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="flex h-8 items-center gap-2 rounded-md px-2 py-2">
                      <Frame className="text-sidebar-foreground h-4 w-4" />
                      <span className="text-sidebar-foreground text-sm">Design Engineering</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="flex h-8 items-center gap-2 rounded-md px-2 py-2">
                      <PieChart className="text-sidebar-foreground h-4 w-4" />
                      <span className="text-sidebar-foreground text-sm">Sales & Marketing</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="flex h-8 items-center gap-2 rounded-md px-2 py-2">
                      <Map className="text-sidebar-foreground h-4 w-4" />
                      <span className="text-sidebar-foreground text-sm">Travel</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem className="opacity-70">
                    <SidebarMenuButton className="flex h-8 items-center gap-2 rounded-md px-2 py-2">
                      <Ellipsis className="text-sidebar-foreground h-4 w-4" />
                      <span className="text-sidebar-foreground text-sm">More</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="bg-sidebar p-2">
            <SidebarMenuButton className="flex h-12 items-center gap-2 rounded-md p-2">
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
              </Avatar>
              <div className="flex flex-col gap-0.5">
                <span className="text-sidebar-foreground text-sm font-semibold">shadcn</span>
                <span className="text-sidebar-foreground text-xs">m@example.com</span>
              </div>
              <ChevronsUpDown className="text-sidebar-foreground ml-auto h-4 w-4" />
            </SidebarMenuButton>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1 p-2">
          <div className="bg-background flex h-full flex-col rounded-xl shadow-lg">
            <header className="border-border flex h-12 items-center justify-between border-b px-6">
              <div className="flex items-center gap-2">
                <SidebarTrigger className="h-7 w-7 rounded-md" />
                <Separator orientation="vertical" className="h-4" />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbPage className="text-foreground text-sm">Payroll</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost">GitHub</Button>
                <Select
                  value={theme}
                  onValueChange={(value) => setTheme(value as 'light' | 'dark' | 'system')}
                >
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

            <div className="flex-1 overflow-auto p-6">
              <div className="space-y-6">
                <div className="grid grid-cols-4 gap-4">
                  <Card>
                    <CardHeader className="pb-6">
                      <div className="space-y-1.5">
                        <div className="flex items-start justify-between">
                          <p className="text-muted-foreground text-sm">Total Revenue</p>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <TrendingUp className="h-3 w-3" />
                            +12,5%
                          </Badge>
                        </div>
                        <p className="text-card-foreground text-3xl font-semibold">$15,231.89</p>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <p className="text-card-foreground text-sm">Trending up this month</p>
                          <TrendingUp className="text-card-foreground h-4 w-4" />
                        </div>
                        <p className="text-muted-foreground text-sm">
                          Visitors for the last 6 months
                        </p>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card>
                    <CardHeader className="pb-6">
                      <div className="space-y-1.5">
                        <div className="flex items-start justify-between">
                          <p className="text-muted-foreground text-sm">New Customers</p>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <TrendingDown className="h-3 w-3" />
                            -20%
                          </Badge>
                        </div>
                        <p className="text-card-foreground text-3xl font-semibold">1,234</p>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <p className="text-card-foreground text-sm">Down 20% this period</p>
                          <TrendingUp className="text-card-foreground h-4 w-4" />
                        </div>
                        <p className="text-muted-foreground text-sm">Acquisition needs attention</p>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card>
                    <CardHeader className="pb-6">
                      <div className="space-y-1.5">
                        <div className="flex items-start justify-between">
                          <p className="text-muted-foreground text-sm">Active Accounts</p>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <TrendingUp className="h-3 w-3" />
                            +12,5%
                          </Badge>
                        </div>
                        <p className="text-card-foreground text-3xl font-semibold">45,678</p>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <p className="text-card-foreground text-sm">Strong user retention</p>
                          <TrendingUp className="text-card-foreground h-4 w-4" />
                        </div>
                        <p className="text-muted-foreground text-sm">Engagement exceed targets</p>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card>
                    <CardHeader className="pb-6">
                      <div className="space-y-1.5">
                        <div className="flex items-start justify-between">
                          <p className="text-muted-foreground text-sm">Growth Rate</p>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <TrendingUp className="h-3 w-3" />
                            +4.5%
                          </Badge>
                        </div>
                        <p className="text-card-foreground text-3xl font-semibold">4.5%</p>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <p className="text-card-foreground text-sm">
                            Steady performance increase
                          </p>
                          <TrendingUp className="text-card-foreground h-4 w-4" />
                        </div>
                        <p className="text-muted-foreground text-sm">Meets growth projections</p>
                      </div>
                    </CardHeader>
                  </Card>
                </div>

                <Card>
                  <CardHeader className="pb-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1.5">
                        <h3 className="text-card-foreground text-base">Total Visitors</h3>
                        <p className="text-muted-foreground text-sm">Total for the last 3 months</p>
                      </div>
                      <ToggleGroup type="single" defaultValue="last-3-months">
                        <ToggleGroupItem value="last-3-months" variant="outline">
                          Last 3 months
                        </ToggleGroupItem>
                        <ToggleGroupItem value="last-30-days" variant="outline">
                          Last 30 days
                        </ToggleGroupItem>
                        <ToggleGroupItem value="bold" variant="outline">
                          <Bold className="h-4 w-4" />
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
                      <TabsList className="bg-muted rounded-lg p-1">
                        <TabsTrigger value="outline" className="rounded-md px-2 py-1">
                          Outline
                        </TabsTrigger>
                        <TabsTrigger
                          value="past-performance"
                          className="flex items-center gap-2 rounded-md px-2 py-1"
                        >
                          Past Performance
                          <Badge variant="secondary">3</Badge>
                        </TabsTrigger>
                        <TabsTrigger
                          value="key-personnel"
                          className="flex items-center gap-2 rounded-md px-2 py-1"
                        >
                          Key Personnel
                          <Badge variant="secondary">2</Badge>
                        </TabsTrigger>
                        <TabsTrigger value="focus-documents" className="rounded-md px-2 py-1">
                          Focus Documents
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                    <div className="flex items-center gap-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm" className="flex items-center gap-2">
                            <Columns2 className="h-4 w-4" />
                            Customize Columns
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                      </DropdownMenu>
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Plus className="h-4 w-4" />
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
                              <GripVertical className="text-muted-foreground h-4 w-4" />
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
                          {
                            header: 'Cover Page',
                            type: 'Cover Page',
                            status: 'in-process',
                            target: '23',
                            limit: '32',
                            reviewer: 'Jamik Tashpulatov',
                          },
                          {
                            header: 'Table of contents',
                            type: 'Table of Contents',
                            status: 'done',
                            target: '45',
                            limit: '8',
                            reviewer: 'Jamik Tashpulatov',
                          },
                          {
                            header: 'Executive summary',
                            type: 'Technical Content',
                            status: 'done',
                            target: '45',
                            limit: '45',
                            reviewer: 'Jamik Tashpulatov',
                          },
                          {
                            header: 'Technical approach',
                            type: 'Cover Page',
                            status: 'in-process',
                            target: '45',
                            limit: '45',
                            reviewer: 'Eddie Lake',
                          },
                          {
                            header: 'Design',
                            type: 'Cover Page',
                            status: 'in-process',
                            target: '23',
                            limit: '23',
                            reviewer: 'Eddie Lake',
                          },
                          {
                            header: 'Capabilities',
                            type: 'Narrative',
                            status: 'done',
                            target: '23',
                            limit: '23',
                            reviewer: 'Eddie Lake',
                          },
                          {
                            header: 'Integration with existing systems',
                            type: 'Technical Content',
                            status: 'in-process',
                            target: '23',
                            limit: '23',
                            reviewer: 'Eddie Lake',
                          },
                          {
                            header: 'Innovation and Advantages',
                            type: 'Table of Contents',
                            status: 'done',
                            target: '8',
                            limit: '45',
                            reviewer: 'Eddie Lake',
                          },
                          {
                            header: "Overview of EMR's Innovative Solutions",
                            type: 'Narrative',
                            status: 'done',
                            target: '23',
                            limit: '23',
                            reviewer: null,
                          },
                          {
                            header: 'Advanced Algorithms and Machine Learning',
                            type: 'Table of Contents',
                            status: 'in-process',
                            target: '89',
                            limit: '23',
                            reviewer: null,
                          },
                        ].map((row, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <Button variant="ghost" size="sm">
                                <GripVertical className="text-muted-foreground h-4 w-4" />
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
                            <TableCell>
                              <Badge variant="outline">{row.type}</Badge>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline" className="flex w-fit items-center gap-1">
                                {row.status === 'done' ? (
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
                              {row.reviewer ?? (
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="outline" disabled className="opacity-50">
                                      Assign reviewer
                                      <ChevronDown className="h-4 w-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                </DropdownMenu>
                              )}
                            </TableCell>
                            <TableCell>
                              <Button variant="ghost" size="icon">
                                <EllipsisVertical className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  <div className="flex items-center justify-center pt-4">
                    <div className="flex w-full items-center justify-between">
                      <p className="text-muted-foreground text-sm">0 of 68 row(s) selected.</p>
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
                            <ChevronsLeft className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="icon" disabled className="opacity-50">
                            <ChevronLeft className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="icon">
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="icon">
                            <ChevronsRight className="h-4 w-4" />
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
  );
}
