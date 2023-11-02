import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/userSlice";
import { Sidebar } from "../components/sidebar";
import { getConversations } from "../features/chatSlice";

export default function Home() {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.user);
  useEffect(() => {

    if (user?.token) {
      console.log("Rupam");
      dispatch(getConversations(user.token))
    }
  }, [])
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
