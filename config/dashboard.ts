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
      subSidebarNav: [
        {
          title: "Overview",
          href: "/dashboard",
        },
        {
          title: "Analytics",
          href: "/dashboard/analytics",
        },
        {
          title: "Reports",
          href: "/dashboard/reports",
        },
      ],
    },
    
    {
      title: "Classes",
      href: "/dashboard/classes",
      icon: "classes",
      subSidebarNav: [
        {
          title: "All Classes",
          href: "/dashboard/classes",
        },
        {
          title: "Add Class",
          href: "/dashboard/classes/add",
        }
      ],

    },
    {
      title: "Department",
      href: "/dashboard/department",
      icon: "building",
      subSidebarNav: [
        {
          title: "All Department",
          href: "/dashboard/department",
        },
        {
          title: "Add Department",
          href: "/dashboard/department/add",
        }
      ],
    },
    {
      title: "Student",
      href: "/dashboard/student",
      icon: "users",
      subSidebarNav: [
        {
          title: "All Student",
          href: "/dashboard/student",
        },
        {
          title: "Add Student",
          href: "/dashboard/student/add",
        }
      ],
    },
    {
      title: "Courses",
      href: "/dashboard/courses",
      icon: "course",
      subSidebarNav: [
        {
          title: "All Courses",
          href: "/dashboard/courses",
        },
        {
          title: "Add Course",
          href: "/dashboard/courses/add",
        }
      ],
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
      subSidebarNav: [
        {
          title: "Profile",
          href: "/dashboard/settings/profile",
        },
        {
          title: "Notifications",
          href: "/dashboard/settings/notifications",
        },
        {
          title: "Security",
          href: "/dashboard/settings/security",
        },
        {
          title: "Subscription",
          href: "/dashboard/settings/subscription",
        },
      ],

    },
    {
      title: "Billing",
      href: "/dashboard/payments",
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