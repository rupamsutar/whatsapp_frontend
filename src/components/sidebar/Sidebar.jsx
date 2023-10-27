import React from 'react'
import { SidebarHeader } from './header'
import Notifications from './notifications/Notifications'

const Sidebar = () => {
  return (
    <div className="w-[40%] h-full select-none">
        {/* Sidebar Header */}
        <SidebarHeader />
        {/* Notifications */}
        <Notifications />
    </div>
  )
}

export default Sidebar