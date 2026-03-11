import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { AppSidebar } from "./AppSidebar";
import { SidebarProvider, useSidebar } from "./SidebarContext";

interface AppLayoutProps {
  children: ReactNode;
}

const LayoutContent = ({ children }: { children: ReactNode }) => {
  const { sidebarOpen } = useSidebar();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AppSidebar />
      <div className="flex-1 pt-16 lg:pt-20 relative">
        {children}
        {sidebarOpen && (
          <div className="fixed inset-0 z-30 bg-foreground/40 backdrop-blur-[2px] pointer-events-auto mt-16 lg:mt-20 transition-opacity duration-200" />
        )}
      </div>
    </div>
  );
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <SidebarProvider>
      <LayoutContent>{children}</LayoutContent>
    </SidebarProvider>
  );
};
