import { Outlet } from "react-router-dom"
import { ROUTES } from "../constants/routes"
import { useRedirect } from "../hooks/useRedirect"
import Header from "./Header"
import Sidebar from "./Sidebar"
// import { useInactivity } from "../hooks/useInactivity"
// const WARN_TIME = 10000
// const LOGOUT_TIME = 15000

const Layout = () => {
  useRedirect(ROUTES.DASHBOARD, ROUTES.HOME)
  // const { showWarningMessage, setShowWarningMessage} = useInactivity({ warnTime: WARN_TIME, logoutTime: LOGOUT_TIME })
  return (
    <div className="flex relative">
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