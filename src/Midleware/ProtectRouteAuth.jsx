import { Navigate, Outlet } from "react-router-dom"

const ProtectRouteAuth = (props) => {
  const auth = props.auth
  const roleAllowed = props.role

  if (!auth) {
    return <Navigate to='/'></Navigate>
  } else {
    if (roleAllowed === "admin") {
      return <Outlet></Outlet>
    } else if (roleAllowed) {
      return <Navigate to='/authorization/error'></Navigate>
    } else {
      return <Navigate to='/'></Navigate>
    }
  }
}

export default ProtectRouteAuth
