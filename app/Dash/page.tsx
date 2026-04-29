import React from "react"
import SidebarPage from "../Sidebar/page"
import NavbarDemo from "../Navbar/page"
import DashboardContent from "./DashContent"

const Page = () =>{
    return(
        <div className="flex bg-[#050505]">
            <SidebarPage/>
            <div className="flex-1">
                <NavbarDemo/>
                <DashboardContent/>
            </div>
        </div>
    )
}
export default Page