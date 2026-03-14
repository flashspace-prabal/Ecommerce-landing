import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { AppSidebar } from "./AppSidebar";
import { SidebarProvider, useSidebar } from "./SidebarContext";

interface AppLayoutProps {
  children: ReactNode;
}

const LayoutContent = ({ children }: { children: ReactNode }) => {
  const { sidebarState } = useSidebar();
  const isOpen = sidebarState !== "closed";
  const isCollapsed = sidebarState === "collapsed";
  const marginClass = isOpen
    ? isCollapsed
      ? "lg:ml-[72px]"
      : "lg:ml-64"
    : "ml-0";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-row flex-1 pt-16 lg:pt-20">
        <AppSidebar />
        <main
          className={`flex-1 min-w-0 transition-all duration-250 ease-in-out ${marginClass}`}
        >
          {children}
        </main>
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
