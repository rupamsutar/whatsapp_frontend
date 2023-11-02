import React, { useState } from 'react'
import { SidebarHeader } from './header'
import Notifications from './notifications/Notifications'
import { Search } from './search'
import {  Conversations } from './conversations'

const Sidebar = () => {
    const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="w-[40%] h-full select-none">
        {/* Sidebar Header */}
        <SidebarHeader />
        {/* Notifications */}
        <Notifications />
        {/* Search */}
        <Search searchLength={searchResults.length} /> 
        {/* Conversations */}
        <Conversations />
    </div>
  )
}

export default Sidebar