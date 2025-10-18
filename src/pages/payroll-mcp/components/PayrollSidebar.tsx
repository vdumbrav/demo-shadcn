import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
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
} from "@/components/ui/sidebar";
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
} from "lucide-react";

/**
 * PayrollSidebar Component
 * Navigation sidebar for the Payroll MCP page
 * Includes Platform and Projects sections with menu items
 */
export function PayrollSidebar() {
  return (
    <Sidebar className="bg-sidebar">
      {/* Sidebar Header */}
      <SidebarHeader className="p-2 bg-sidebar">
        <SidebarMenuButton className="flex items-center gap-2 p-2 rounded-md h-12">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-sidebar-primary">
            <GalleryVerticalEnd className="w-4 h-4 text-sidebar-primary-foreground" />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-semibold text-sidebar-foreground">
              Documentation
            </span>
            <span className="text-xs text-sidebar-foreground">v1.0.1</span>
          </div>
          <ChevronsUpDown className="w-4 h-4 text-sidebar-foreground ml-auto" />
        </SidebarMenuButton>
      </SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent className="gap-2">
        {/* Platform Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="px-2 h-8 rounded-md opacity-70">
            <span className="text-xs font-medium text-sidebar-foreground">
              Platform
            </span>
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
                  <span className="text-sm text-sidebar-foreground">
                    Payroll & Expenses
                  </span>
                </SidebarMenuButton>
                <SidebarMenuSub className="pl-6 py-0.5 border-l border-sidebar-border">
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton className="px-2 h-7 rounded-md bg-sidebar-accent">
                      <span className="text-sm text-sidebar-accent-foreground">
                        Payroll
                      </span>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton className="px-2 h-7 rounded-md">
                      <span className="text-sm text-sidebar-foreground">
                        Sub Menu Item
                      </span>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton className="px-2 h-7 rounded-md">
                      <span className="text-sm text-sidebar-foreground">
                        Sub Menu Item
                      </span>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton className="px-2 h-7 rounded-md">
                      <span className="text-sm text-sidebar-foreground">
                        Sub Menu Item
                      </span>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton className="px-2 h-7 rounded-md">
                      <span className="text-sm text-sidebar-foreground">
                        Sub Menu Item
                      </span>
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

        {/* Projects Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="px-2 h-8 rounded-md opacity-70">
            <span className="text-xs font-medium text-sidebar-foreground">
              Projects
            </span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="flex items-center gap-2 px-2 py-2 h-8 rounded-md">
                  <Frame className="w-4 h-4 text-sidebar-foreground" />
                  <span className="text-sm text-sidebar-foreground">
                    Design Engineering
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="flex items-center gap-2 px-2 py-2 h-8 rounded-md">
                  <PieChart className="w-4 h-4 text-sidebar-foreground" />
                  <span className="text-sm text-sidebar-foreground">
                    Sales & Marketing
                  </span>
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

      {/* Sidebar Footer */}
      <SidebarFooter className="p-2 bg-sidebar">
        <SidebarMenuButton className="flex items-center gap-2 p-2 rounded-md h-12">
          <Avatar className="w-8 h-8 rounded-lg">
            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-semibold text-sidebar-foreground">
              shadcn
            </span>
            <span className="text-xs text-sidebar-foreground">m@example.com</span>
          </div>
          <ChevronsUpDown className="w-4 h-4 text-sidebar-foreground ml-auto" />
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
}
