import React from "react";
import { useSelector } from "react-redux";
import Conversation from "./Conversation";
import { checkOnlineStatus, getConversationId } from "../../../utils/chat";

const Conversations = ({onlineUsers}) => {
  const { conversations, activeConversation } = useSelector((store) => store.chat);
  const {user} = useSelector(state => state.user);
  return (
    <div className="convos scrollbar">
      <ul>
        {conversations && conversations
        .filter((c) => c.latestMessage || c._id === activeConversation._id)
        .map((convo) => {
          return <Conversation key={convo._id} convo={convo} online={checkOnlineStatus(onlineUsers, user, convo.users)} />;
        })}
      </ul>
    </div>
  );
};

export default Conversations;