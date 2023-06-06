import React from "react"
import AuthApi from "../AuthApi"
import { useState } from "react"
import { useEffect } from "react"
import Sidebar from "../component/template/Sidebar"
import Header from "../component/template/Header"
import MainReportAttendance from "../component/ReportAttendance/MainReportAttendance"

const ReportAttendance = () => {
  const Auth = React.useContext(AuthApi)
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  useEffect(() => {
    Auth.setPageActive("report-attendance")
  }, [Auth])

  function toggleSideMenu() {
    const hamburger = document.getElementById("humbergerButton")
    hamburger.classList.toggle("hamburger-active")
    setIsSideMenuOpen(!isSideMenuOpen)
  }

  return (
    <div className='flex h-screen bg-gray-50 dark:bg-gray-900'>
      <Sidebar isSideMenuOpen={isSideMenuOpen} />
      <div className='flex flex-col flex-1 w-full overflow-auto'>
        <Header toggleSideMenu={toggleSideMenu} />
        <MainReportAttendance />
      </div>
    </div>
  )
}

export default ReportAttendance
