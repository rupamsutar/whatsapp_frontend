import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Message from "./Message";

export default function ChatMessages() {
  const { messages } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.user);
  const endRef = useRef();

  useEffect(() => {
    endRef.current.scrollIntoView({behavior: "smooth"})
  }, [messages]);

  return (
    <div
      className="mb-[60px] bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(https://res.cloudinary.com/dmhcnhtng/image/upload/v1677358270/Untitled-1_copy_rpx8yb.jpg)` }}
    >
      {/* Container */}
      <div className="scrollbar overflow_scrollbar overflow-auto py-2 px-[5%]">
        {messages &&
          messages.map((message) => {
            return <Message
              message={message}
              key={message._id}
              me={user._id === message.sender._id}
              // me={false}
            />;
          })}
          <div className="" ref={endRef} ></div>
      </div>
    </div>
  );
}
