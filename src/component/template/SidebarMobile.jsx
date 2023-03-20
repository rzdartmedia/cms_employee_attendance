import React from "react"
import ContentSidebar from "./ContentSidebar"

function SidebarMobile(props) {
  return (
    <aside
      className={`${
        props.isSideMenuOpen ? "fixed sidebar-open-mobile" : "hidden"
      } inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 lg:hidden`}>
      <ContentSidebar />
    </aside>
  )
}

export default SidebarMobile
