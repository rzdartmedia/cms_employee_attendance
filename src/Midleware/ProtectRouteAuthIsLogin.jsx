import { Navigate, Outlet } from "react-router-dom"
import Cookies from "js-cookie"

const ProtectRouteAuthIsLogin = (props) => {
  const refreshToken = Cookies.get("refreshToken")
  const auth = props.auth

  if (auth && refreshToken) {
    return <Navigate to='/attendance'></Navigate>
  }

  return <Outlet />
}

export default ProtectRouteAuthIsLogin
