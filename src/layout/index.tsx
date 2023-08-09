import { Outlet } from "react-router-dom"
import { ROUTES } from "../constants/routes"
import { useRedirect } from "../hooks/useRedirect"
import Header from "./Header"
import Sidebar from "./Sidebar"


const Layout = () => {
  useRedirect(ROUTES.DASHBOARD, ROUTES.HOME)

  return (
   <div className="flex">
    <Sidebar />
    <div className="w-screen">
      <Header />
      <div className="bg-content-bg h-5/6 p-4">
        <Outlet />
      </div>
    </div>
   </div>
  )
}

export default Layout