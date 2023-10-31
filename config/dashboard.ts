import { DashboardConfig } from "@/types/nav"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "Dashoboard",
      href: "/dashboard",
      icon: "post",
    },
    
    {
      title: "Classes",
      href: "/dashboard/classes",
      icon: "settings",
    },
    {
      title: "Department",
      href: "/dashboard/department",
      icon: "settings",
    },
    {
      title: "Student",
      href: "/dashboard/student",
      icon: "settings",
    },
    {
      title: "Courses",
      href: "/dashboard/courses",
      icon: "settings",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
    {
      title: "Billing",
      href: "/dashboard/billing",
      icon: "billing",
    },
  ],
  footerNav: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "FAQ",
      href: "/faq",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "Privacy Policy",
      href: "/privacy",
    },
    {
      title: "Terms of Service",
      href: "/terms",
    },
  ],
}