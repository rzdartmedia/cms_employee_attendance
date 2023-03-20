import Cookies from "js-cookie"
import React, { useEffect } from "react"
import { Navigate } from "react-router-dom"
import AuthApi from "../AuthApi"
import ToastNotify from "../utils/ToastNotify"

const AuthorizationError = () => {
  const Auth = React.useContext(AuthApi)

  useEffect(() => {
    console.log("logout")
    Auth.setAuth(false)
    Cookies.remove("refreshToken")
    Cookies.remove("user")
    ToastNotify("error", "You are not entities")
  }, [])

  return <Navigate to='/'></Navigate>
}

export default AuthorizationError
