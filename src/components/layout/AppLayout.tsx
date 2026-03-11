import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { AppSidebar } from "./AppSidebar";
import { SidebarProvider } from "./SidebarContext";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Sidebar (overlay, does not affect content flow) */}
        <AppSidebar />

        {/* Page content — never shifts */}
        <div className="flex-1 pt-16 lg:pt-20">
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
};
