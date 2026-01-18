import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/layout/app-sidebar"
import AppContent from "./app-content"

export default function Layout() {
  return (
    <div className="bg-sidebar">
      <SidebarProvider className='h-screen'>
        <div className="flex flex-1 min-h-0">
          <AppSidebar />
          <SidebarInset className='overflow-auto mt-3 rounded-tl-lg border border-accent'>
            <AppContent />
          </SidebarInset>
        </div>
      </SidebarProvider >
    </div>
  )
}