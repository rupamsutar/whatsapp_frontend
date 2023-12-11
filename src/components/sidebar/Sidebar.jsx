import React, { useState } from 'react'
import { SidebarHeader } from './header'
import Notifications from './notifications/Notifications'
import { Search, SearchResults } from './search'
import {  Conversations } from './conversations'

const Sidebar = () => {
    const [searchResults, setSearchResults] = useState([]);
  
  return (
    <div className="flex0030 max-w-[30%] h-full select-none">
        {/* Sidebar Header */}
        <SidebarHeader />
        {/* Notifications */}
        <Notifications />
        {/* Search */}
        <Search searchLength={searchResults.length} setSearchResults={setSearchResults}/> 
        {searchResults.length > 0 ? (
          <>
            <SearchResults searchResults={searchResults} setSearchResults={setSearchResults} />
          </>
        ) : (
          <>
            <Conversations />
          </>
        )}
        
    </div>
  )
}

export default Sidebar