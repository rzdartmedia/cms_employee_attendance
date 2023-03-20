import React, { useEffect, useState } from "react"
import AuthApi from "../AuthApi"
import MainPermission from "../component/permission/MainPermission"
import Header from "../component/template/Header"
import Sidebar from "../component/template/Sidebar"

const Permission = () => {
  const Auth = React.useContext(AuthApi)
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  useEffect(() => {
    Auth.setPageActive("permission")
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
        <MainPermission />
      </div>
    </div>
  )
}

export default Permission
