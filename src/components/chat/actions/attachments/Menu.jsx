import React from "react";
import { CameraIcon, ContactIcon, DocumentIcon, PhotoIcon, PollIcon, StickerIcon } from "../../../../svg";

export default function Menu() {
  return (
    <ul className="absolute bottom-14 openEmojiAnimation ">
      <li>
        <button type='button' className="rounded-full">
          <PollIcon />
        </button>
      </li>
      <li>
        <button type='button' className="bg-[#0EABF4] rounded-full">
          <ContactIcon />
        </button>
      </li>
      <li>
        <button className="bg-[#5f66cd] rounded-full">
          <DocumentIcon />
        </button>
      </li>
      <li>
        <button type='button' className="bg-[#d3369d] rounded-full">
          <CameraIcon />
        </button>
      </li>
      <li>
        <button type='button' className="rounded-full">
          <StickerIcon />
        </button>
      </li>
      <li>
        <button type='button' className="bg-[#BF59CF] rounded-full">
          <PhotoIcon />
        </button>
      </li>
    </ul>
  );
}
