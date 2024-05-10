import { cn } from "@/lib/utils";
import Link from "next/link";
import { MobileSidebar } from "@/components/layout/dashboard/mobile-nav";
import { ThemeToggle } from "@/components/ThemeToggle/theme-toggle";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function HeaderNav() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      {/* <nav className="h-14 flex items-center justify-between px-4"> */}
      {/* <div className="hidden lg:block">
        <div className="w-full flex-1">
            
          </div>
        </div>*/}
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>
      <div className={cn("block lg:!hidden")}>
        <MobileSidebar />
      </div>

      <div className="flex items-center gap-2">
        {/* <UserNav /> */}
        <ThemeToggle />
      </div>
      {/* </nav> */}
    </header>
  );
}
