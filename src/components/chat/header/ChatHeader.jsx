import React from "react";
import { useSelector } from "react-redux";
import SearchLargeIcon from "../../../svg/SearchLarge";
import DotsIcon from "../../../svg/Dots";
import { getConversationName, getConversationPicture } from "../../../utils/chat";

export default function ChatHeader({online}) {
  const { activeConversation } = useSelector((state) => state.chat);
  const { user } = useSelector(state => state.user)
  const { name, picture } = activeConversation;
  return (
    <div className="h-[59px] dark:bg-dark_bg_2 flex items-center p16 select-none">
      {/* container */}
      <div className="w-full flex items-center justify-between">
        {/* left */}
        <div className="flex items-center gap-x-4">
          {/* Conversation Image */}
          <button className="btn">
            <img
              src={getConversationPicture(user, activeConversation.users)}
              alt={`${name}`}
              className="w-full h-full rounded-full object-cover"
            />
          </button>
          <div className="flex flex-col">
            <h1 className="dark:text-white text-md font-bold">
              {getConversationName(user, activeConversation.users)}
            </h1>
            <span className="text-xs dark:text-dark_svg_2">{online ? 'online' : ""}</span>
          </div>
        </div>
        {/* right */}
        <ul className="flex items-center gap-x-2.5">
          <li>
            <button className="btn">
              <SearchLargeIcon className="dark:fill-dark_svg_1" />
            </button>
          </li>
          <li>
            <button className="btn">
              <DotsIcon className="dark:fill-dark_svg_1" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
