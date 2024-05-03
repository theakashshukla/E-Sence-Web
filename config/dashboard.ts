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
      icon: "dashboard",
    },
    
    {
      title: "Classes",
      href: "/dashboard/classes",
      icon: "classes",
    },
    {
      title: "Department",
      href: "/dashboard/department",
      icon: "building",
    },
    {
      title: "Student",
      href: "/dashboard/student",
      icon: "users",
    },
    {
      title: "Courses",
      href: "/dashboard/courses",
      icon: "course",
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