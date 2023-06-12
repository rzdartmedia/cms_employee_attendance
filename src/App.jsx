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
import ReportAttendance from "./pages/ReportAttendance"
import Employee from "./pages/Employee"
import AttendanceByMonth from "./pages/AttendanceByMonth"
import Profile from "./pages/Profile"

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
      <BrowserRouter basename='/cms-attendance'>
        <Routes>
          <Route element={<ProtectRouteAuthIsLogin auth={auth} />}>
            <Route index element={<Authentication />} />
          </Route>

          <Route
            element={
              <ProtectRouteAuth auth={auth} role={accessAuthorizationUser} />
            }>
            <Route path='*' element={<Attendance />} />
            <Route path='/employee' element={<Employee />} />
            <Route path='/attendance' element={<Attendance />} />
            <Route path='/report-attendance' element={<ReportAttendance />} />
            <Route
              path='/attendance-by-month'
              element={<AttendanceByMonth />}
            />
            <Route path='/permission' element={<Permission />} />
            <Route path='/profile' element={<Profile />} />
          </Route>

          <Route
            path='/authorization/error'
            element={<AuthorizationError />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthApi.Provider>
  )
}

export default App
