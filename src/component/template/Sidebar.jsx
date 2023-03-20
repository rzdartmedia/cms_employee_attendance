import React from "react"
import ContentSidebar from "./ContentSidebar"
import SidebarMobile from "./SidebarMobile"

function Sidebar(props) {
  return (
    <div>
      {/* Desktop sidebar */}
      <aside className='z-20 hidden lg:block h-full w-64 overflow-y-auto bg-white dark:bg-gray-800 flex-shrink-0'>
        <ContentSidebar />
      </aside>
      {/* Desktop sidebar end */}

      {/* Mobile Sidebar */}
      <SidebarMobile isSideMenuOpen={props.isSideMenuOpen} />
      {/* Mobile Sidebar End */}
    </div>
  )
}

export default Sidebar
