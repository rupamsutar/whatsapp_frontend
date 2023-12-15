import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Sidebar } from "../components/sidebar";
import { getConversations, updateMessagesAndConversations } from "../features/chatSlice";
import { ChatContainer, WhatsappHome } from "../components/chat";
import SocketContext from "../context/SocketContext";

function Home({socket}) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { activeConversation } = useSelector((state) => state.chat);
  const [onlineUsers, setOnlineUsers] = useState([]);
  // join user into the socket import
    useEffect(() => {
      socket.emit('join', user._id);

      // Get Online Users
      socket.on('get-online-users', (users) => {
        console.log("online users", users);
        setOnlineUsers(users)
      });
    }, [user]);
  // get conversation
  useEffect(() => {
    if (user?.token) {
      dispatch(getConversations(user.token));
    }
  }, []);

  // Listening to received messages
  useEffect(() => {
    socket.on("receive message", (message) => {
      dispatch(updateMessagesAndConversations(message))
    });
  }, []);

  return (
    <div className="h-screen dark:bg-dark_bg_1 flex items-center justify-center  overflow-hidden">
      {/* Container */}
      <div className="container h-screen py-[19px] flex">
        {/* SideBar */}
        <Sidebar onlineUsers={onlineUsers} />
        {activeConversation?._id ? <ChatContainer onlineUsers={onlineUsers} /> : <WhatsappHome />}
      </div>
    </div>
  );
}

const HomeWithSocket = (props) => {
  return (
    <SocketContext.Consumer>
      {(socket) => {
        return <Home {...props} socket={socket} />;
      }}
    </SocketContext.Consumer>
  );
};
export default HomeWithSocket;
