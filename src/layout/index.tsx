import { ROUTES } from "../constants/routes"
import { useRedirect } from "../hooks/useRedirect"


const Layout = () => {
  useRedirect(ROUTES.DASHBOARD, ROUTES.HOME)
  return (
    <div>Layout</div>
  )
}

export default Layout