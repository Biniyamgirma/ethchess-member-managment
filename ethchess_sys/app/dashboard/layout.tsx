import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      {/* 1. Sidebar stays locked to the left */}
      <AppSidebar /> 
      
      {/* 2. Everything else renders to the right */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex items-center gap-2 mb-4">
          <SidebarTrigger />
        </div>
        {children} {/* This is where your History component will load */}
      </main>
    </SidebarProvider>
  )
}