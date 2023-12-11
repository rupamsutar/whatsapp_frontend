import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/userSlice";
import { Sidebar } from "../components/sidebar";
import { getConversations } from "../features/chatSlice";
import { ChatContainer, WhatsappHome } from "../components/chat";

export default function Home() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { activeConversation } = useSelector((state) => state.chat);
  
  // get conversation
  useEffect(() => {
    if (user?.token) {
      dispatch(getConversations(user.token));
    }
  }, []);

  return (
    <div className="h-screen dark:bg-dark_bg_1 flex items-center justify-center py-[19px] overflow-hidden">
      {/* Container */}
      <div className="container h-screen flex">
        {/* SideBar */}
        <Sidebar />
        {activeConversation?._id ? <ChatContainer /> : <WhatsappHome />}
      </div>
    </div>
  );
}
