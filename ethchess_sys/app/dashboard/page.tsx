import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { MembersTable } from "@/components/members_list/membersTable"
export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4 ">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-vertical:h-4 data-vertical:self-auto"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    ETHCHESS Memeber Management System
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 w-11/12">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" >
                  <div className="flex items-center justify-center h-full">
                    <div>
                    <p className="text-muted-foreground">ETHCHESS Total Members</p>
                    <p className="text-lg font-semibold">1,234</p>
                    </div>
                    
                  </div>
            </div>
            <div className="aspect-video rounded-xl bg-muted/50" >
             <div className="flex items-center justify-center h-full">
                    <div>
                    <p className="text-muted-foreground">ETHCHESS Total Games</p>
                    <p className="text-lg font-semibold">10,000</p>
                    </div>
                  </div>
            </div>
            <div className="aspect-video rounded-xl bg-muted/50" >
             <div className="flex items-center justify-center h-full">
                    <div>
                    <p className="text-muted-foreground">ETHCHESS Active Members</p>
                    <p className="text-lg font-semibold">3,000</p>
                    </div>
                  </div>
            </div>
          </div>
          <div className="md:w-[960px] rounded-xl bg-muted/50 p-4 " >
            <MembersTable />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
