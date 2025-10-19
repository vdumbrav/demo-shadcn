import { useTheme } from '@/context/theme-context';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

// Import modular components
import {
  StatsCards,
  VisitorsChart,
  PayrollTable,
  StartPayrollDialog,
  PayrollSidebar,
} from './payroll-mcp/components';

/**
 * PayrollMcp Page
 * Main payroll management page with sidebar, dashboard, and data table
 *
 * Structure:
 * - Sidebar: Navigation menu with Platform and Projects sections
 * - Header: Breadcrumb, theme selector, and Start Payroll action
 * - Dashboard: Stats cards and visitors chart
 * - Table: Payroll sections with filtering and pagination
 */
export default function PayrollMcp() {
  const { theme, setTheme } = useTheme();

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden">
        {/* Sidebar Navigation */}
        <PayrollSidebar />

        {/* Main Content Area */}
        <div className="flex-1 overflow-hidden p-1 sm:p-2">
          <div className="bg-background flex h-full flex-col rounded-lg shadow-lg sm:rounded-xl">
            {/* Page Header */}
            <header className="border-border flex flex-col items-start justify-between gap-2 border-b px-3 py-2 sm:h-12 sm:flex-row sm:items-center sm:gap-0 sm:px-4 sm:py-0 lg:px-6">
              <div className="flex w-full items-center gap-2 sm:w-auto">
                <SidebarTrigger className="h-7 w-7 rounded-md" />
                <Separator orientation="vertical" className="hidden h-4 sm:block" />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbPage className="text-foreground text-sm">Payroll</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <div className="flex w-full items-center justify-end gap-2 sm:w-auto">
                <Button variant="ghost" className="hidden md:flex">
                  GitHub
                </Button>
                <Select
                  value={theme}
                  onValueChange={(value) => setTheme(value as 'light' | 'dark' | 'system')}
                >
                  <SelectTrigger className="w-28 sm:w-32 lg:w-40">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
                <StartPayrollDialog />
              </div>
            </header>

            {/* Dashboard Content */}
            <div className="flex-1 overflow-auto p-3 sm:p-4 lg:p-6">
              <div className="space-y-4 sm:space-y-6">
                {/* Statistics Cards Section */}
                <StatsCards />

                {/* Visitors Chart Section */}
                <VisitorsChart />

                {/* Payroll Table Section */}
                <PayrollTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
