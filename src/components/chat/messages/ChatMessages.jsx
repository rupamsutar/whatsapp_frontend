import React from "react";
import backgroundImage from "../../../assets/backgroundImages/HlpKYq.png";
import { useSelector } from "react-redux";
import Message from "./Message";

export default function ChatMessages() {
  const { messages } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.user);

  return (
    <div
      className="mb-[60px] bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Container */}
      <div className="scrollbar overflow_scrollbar overflow-auto py-2 px-[5%]">
        {messages &&
          messages.map((message) => {
            console.log(user._id === message.sender._id)
            return <Message
              message={message}
              key={message._id}
              me={user._id === message.sender._id}
              // me={false}
            />;
          })}
      </div>
    </div>
  );
}
