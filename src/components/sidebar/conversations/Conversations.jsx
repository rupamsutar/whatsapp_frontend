import React from "react";
import { useSelector } from "react-redux";
import Conversation from "./Conversation";

const Conversations = () => {
  const { conversations, activeConversation } = useSelector((store) => store.chat);
  return (
    <div className="convos scrollbar">
      <ul>
        {conversations && conversations
        .filter((c) => c.latestMessage || c._id === activeConversation._id)
        .map((convo) => {
          return <Conversation key={convo._id} convo={convo} />;
        })}
      </ul>
    </div>
  );
};

export default Conversations;
