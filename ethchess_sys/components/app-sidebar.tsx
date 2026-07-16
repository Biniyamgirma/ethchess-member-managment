"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import Image from "next/image"
import { 
  AudioLinesIcon, 
  TerminalIcon, 
  GlobeCheck, 
  BotIcon, 
  BookOpenIcon, 
  Settings2Icon, 
  FrameIcon, 
  PieChartIcon, 
  MapIcon,
  ChessKing,
  Dice5
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"



const staticData = {
  teams: [
    {
      name: "ETHCHESS",
      logo: <Image src="/ETHCHESS.jpg" alt="ETHCHESS" width={28} height={28} />,
      plan: "Admin",
    },
    // {
    //   name: "Acme Corp.",
    //   logo: <AudioLinesIcon />,
    //   plan: "Startup",
    // },
    // {
    //   name: "Evil Corp.",
    //   logo: <TerminalIcon />,
    //   plan: "Free",
    // },
  ],
  navMain: [
    {
      title: "ETHCHESS Event",
      url: "#",
      icon: <ChessKing />,
      isActive: true,
      items: [
        { title: "History", url: "/dashboard/history" },
        { title: "info", url: "/dashboard/user_front_page" },
        { title: "Settings", url: "/dashboard/comming_soon" },
      ],
    },
    {
      title: "OTB Matchs",
      url: "#",
      icon: <Dice5 />,
      items: [
        { title: "Genesis", url: "/dashboard/comming_soon" },
        { title: "Explorer", url: "/dashboard/comming_soon" },
        { title: "Quantum", url: "/dashboard/comming_soon" },
      ],
    },
    {
      title: "ETHchess Online Event",
      url: "#",
      icon: <GlobeCheck />,
      items: [
        { title: "Introduction", url: "/dashboard/comming_soon" },
        { title: "Get Started", url: "/dashboard/comming_soon" },
        { title: "Tutorials", url: "/dashboard/comming_soon" },
        { title: "Changelog", url: "/dashboard/comming_soon" },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: <Settings2Icon />,
      items: [
        { title: "General", url: "/dashboard/comming_soon" },
        { title: "Team", url: "/dashboard/comming_soon" },
        { title: "Billing", url: "/dashboard/comming_soon" },
        { title: "Limits", url: "/dashboard/comming_soon" },
      ],
    },
  ],
  projects: [
    { name: "Active Matchs", url: "/dashboard/comming_soon", icon: <FrameIcon /> },
    { name: "Current Earning", url: "/dashboard/comming_soon", icon: <PieChartIcon /> },
    { name: "Match Setting", url: "/dashboard/comming_soon", icon: <MapIcon /> },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [userRole, setUserRole] = useState<string | null>(null)
  const [userData, setUserData] = useState<{
  name: string;
  avatar: string;
  role: string;
  phone:string;
  address: string;
  subcity: string;
  telegram_username: string;
  member_title: string;
  is_monthly_payment_paid: number; // Adjusted to match your parsedUser fallback string ""
}>({
  name: "",
  avatar: "/avatars/shadcn.jpg",
  role: "",
  phone:"",
  address: "",
  subcity: "",
  telegram_username: "",
  member_title: "",
  is_monthly_payment_paid: 0,
})

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserRaw = localStorage.getItem("user")
      
      if (storedUserRaw) {
        try {
          const parsedUser = JSON.parse(storedUserRaw)
          const fullName = `${parsedUser.f_name || ""} ${parsedUser.l_name || ""}`.trim()
          
          // 1. Capture and save the user's role to state
          setUserRole(parsedUser.role) 
          
          setUserData({
            name: fullName || "User",
            avatar: parsedUser.profile_picture || "/avatars/shadcn.jpg",
            phone:parsedUser.phone || "",
            role:parsedUser.role || "",
            address:parsedUser.address || "",
            subcity:parsedUser.subCity || "",
            telegram_username:parsedUser.telegram_username || "",
            member_title:parsedUser.member_title || "",
            is_monthly_payment_paid: parseInt(parsedUser.is_monthly_payment_paid, 10) ?? 0
          })
        } catch (error) {
          console.error("Failed to parse user item from localStorage:", error)
        }
      }
    }
  }, [])

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={staticData.teams} />
      </SidebarHeader>
      
      <SidebarContent>
        {/* NavMain remains visible to everyone */}
        {userRole == "player" && (
          <NavMain items={staticData.navMain} /> 
        )
        }
        
        {/* 2. RBAC Guard: Only render NavProjects if the user is NOT a player */}
        {userRole == "match-admin" && (
           <NavProjects projects={staticData.projects} />
        )}
      </SidebarContent>
      
      <SidebarFooter>
        <NavUser user={userData} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}