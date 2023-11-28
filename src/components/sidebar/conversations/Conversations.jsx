import React from 'react'
import { useSelector } from 'react-redux'
import Conversation from './Conversation';

const Conversations = () => {
    const {conversations} = useSelector(store => store.chat);
  return (
    <ul className="convos scrollbar">
        {conversations.map((convo) => {
            return <Conversation key={convo._id} convo={convo} />
        })}
    </ul>
  )
}

export default Conversations