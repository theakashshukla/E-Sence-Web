// import { redirect } from "next/navigation";

// import { authOptions } from "@/lib/auth"
// import { db } from "@/lib/db"
// import { getCurrentUser } from "@/lib/session"
// import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { DashboardHeader } from "@/components/header"
// import { PostCreateButton } from "@/components/post-create-button"
import { DashboardShell } from "@/components/shell"

export const metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Posts" text="Create and manage posts.">
        {/* <PostCreateButton /> */}
      </DashboardHeader>

    </DashboardShell>
    
  );
}
