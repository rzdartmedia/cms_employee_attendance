import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import AuthApi from "./AuthApi"
import React, { useEffect, useState } from "react"
import ProtectRouteAuthIsLogin from "./Midleware/ProtectRouteAuthIsLogin"
import ProtectRouteAuth from "./Midleware/ProtectRouteAuth"
import Cookies from "js-cookie"
import { ToastContainer } from "react-toastify"
import Authentication from "./pages/Authentication"
import Attendance from "./pages/Attendance"
import AuthorizationError from "./pages/AuthorizationError"
import Permission from "./pages/Permission"

function App() {
  const [auth, setAuth] = useState(true)
  const user = Cookies.get("user")
  let accessAuthorizationUser = ""
  if (user) {
    accessAuthorizationUser = JSON.parse(user)
    accessAuthorizationUser = accessAuthorizationUser.role
  }
  const [pageActive, setPageActive] = useState("dashboard")

  const readCookie = () => {
    const refreshToken = Cookies.get("refreshToken")
    if (!refreshToken) {
      setAuth(false)
    }
  }

  useEffect(() => {
    readCookie()
  }, [])

  return (
    <AuthApi.Provider value={{ auth, setAuth, pageActive, setPageActive }}>
      <ToastContainer />
      <BrowserRouter basename='/'>
        <Routes>
          <Route element={<ProtectRouteAuthIsLogin auth={auth} />}>
            <Route index element={<Authentication />} />
          </Route>

          <Route
            element={
              <ProtectRouteAuth auth={auth} role={accessAuthorizationUser} />
            }>
            <Route path='/attendance' element={<Attendance />} />
            <Route path='/permission' element={<Permission />} />
            <Route
              path='/authorization/error'
              element={<AuthorizationError />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthApi.Provider>
  )
}

export default App
