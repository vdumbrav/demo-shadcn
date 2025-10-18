import { useTheme } from "@/context/theme-context";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

// Import modular components
import {
  StatsCards,
  VisitorsChart,
  PayrollTable,
  StartPayrollDialog,
  PayrollSidebar,
} from "./payroll-mcp/components";

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
        <div className="flex-1 p-1 sm:p-2 overflow-hidden">
          <div className="bg-background rounded-lg sm:rounded-xl shadow-lg h-full flex flex-col">
            {/* Page Header */}
            <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 px-3 sm:px-4 lg:px-6 py-2 sm:py-0 sm:h-12 border-b border-border">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <SidebarTrigger className="w-7 h-7 rounded-md" />
                <Separator orientation="vertical" className="h-4 hidden sm:block" />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbPage className="text-sm text-foreground">
                        Payroll
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <Button variant="ghost" className="hidden md:flex">GitHub</Button>
                <Select
                  value={theme}
                  onValueChange={(value) =>
                    setTheme(value as "light" | "dark" | "system")
                  }
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
            <div className="flex-1 p-3 sm:p-4 lg:p-6 overflow-auto">
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
