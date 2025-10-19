import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
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
} from '@/components/ui/sidebar';
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
} from 'lucide-react';

/**
 * PayrollSidebar Component
 * Navigation sidebar for the Payroll MCP page
 * Includes Platform and Projects sections with menu items
 */
export function PayrollSidebar() {
  return (
    <Sidebar className="bg-sidebar">
      {/* Sidebar Header */}
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

      {/* Sidebar Content */}
      <SidebarContent className="gap-2">
        {/* Platform Section */}
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

        {/* Projects Section */}
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

      {/* Sidebar Footer */}
      <SidebarFooter className="bg-sidebar p-2">
        <SidebarMenuButton className="flex h-12 items-center gap-2 rounded-md p-2">
          <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-0.5">
            <span className="text-sidebar-foreground text-sm font-semibold">shadcn</span>
            <span className="text-sidebar-foreground text-xs">m@example.com</span>
          </div>
          <ChevronsUpDown className="text-sidebar-foreground ml-auto h-4 w-4" />
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
}
