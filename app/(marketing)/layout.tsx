import Link from "next/link"

import Footer from "@/components/layout/footer"
import NavMenu from "@/components/nav-menu"



interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col ">
      
      <NavMenu/>
      <main className="flex-1">{children}</main>
      <Footer/>
    </div>
  )
}