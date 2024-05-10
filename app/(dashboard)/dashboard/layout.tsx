// import { notFound } from "next/navigation";

import { dashboardConfig } from "@/config/dashboard";
// import { getCurrentUser } from "@/lib/session"
// import { MainNav } from "@/components/main-nav"
import { DashboardNav } from "@/components/layout/dashboard/nav";
import { cn } from "@/lib/utils";
import { MobileSidebar } from "@/components/layout/dashboard/mobile-nav";
import HeaderNav from "@/components/layout/dashboard/header-nav";
import { CloseNav } from "@/components/layout/dashboard/close-nav";
// import { SiteFooter } from "@/components/site-footer"
// import { UserAccountNav } from "@/components/user-account-nav"

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  // const user = await getCurrentUser()
  // if (!user) {
  //     return notFound()

  return (
    <>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        {/* <div className="flex h-screen overflow-hidden"> */}
        <DashboardNav items={dashboardConfig.sidebarNav} />
        {/* <CloseNav items={dashboardConfig.sidebarNav} /> */}
        <div className="flex flex-col">
        <HeaderNav />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
        </div>

        {/* <main className="w-full pt-16">{children}</main> */}
      </div>
    </>

    // <div className="flex min-h-screen flex-col space-y-6">
    //   <div className="grid flex-1 md:grid-cols-[200px_1fr] ">
    //     <aside className="hidden container w-[200px] flex-col md:flex border-e">
    //       <DashboardNav items={dashboardConfig.sidebarNav} />
    //     </aside>

    //     <main className="flex w-full flex-1 flex-col overflow-hidden">
    //       {/* <header className="sticky top-0 z-40 border-b bg-background">
    //     <div className="container flex h-16 items-center justify-between py-4">
    //       <h1>This is Nav</h1>
    //     </div>
    //   </header> */}
    //       {children}
    //     </main>
    //   </div>
    // </div>
  );
}
