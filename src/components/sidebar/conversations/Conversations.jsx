import React from 'react'
import { useSelector } from 'react-redux'
import Conversation from './Conversation';

const Conversations = () => {
    const {conversations} = useSelector(store => store.chat);
    console.log(conversations);
  return (
    <div className="convos scrollbar">
        {conversations.map((convo) => {
            return <Conversation key={convo._id} convo={convo} />
        })}
    </div>
  )
}

export default Conversations