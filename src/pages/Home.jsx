import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { Sidebar } from "../components/sidebar";

export default function Home() {
  const dispatch = useDispatch();
  return (
    <div className="min-h-screen dark:bg-dark_bg_1 flex items-center justify-center py-[19px] overflow-hidden">
      {/* Container */}
      <div className="container min-h-screen flex">
        {/* SideBar */}
        <Sidebar />
      </div>
    </div>
  );
}
