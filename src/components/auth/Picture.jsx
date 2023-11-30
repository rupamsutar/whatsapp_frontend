import React from "react";
import { useState } from "react";
import { useRef } from "react";

const Picture = ({ readablePicture, setReadablePicture, setPicture }) => {
  const [error, setError] = useState("");
  const inputRef = useRef();
  const handlePicture = (e) => {
    let pic = e.target.files[0];
    if (pic) {
      if (
        pic?.type !== "image/jpeg" &&
        pic?.type !== "image/png" &&
        pic?.type !== "image/webp"
      ) {
        setError(`${pic.name} format is not supported.`);
        return;
      } else if (pic.size > 1024 * 1024) {
        setError(`${pic.name} is too large, maximum 5 mb allowed.`);
        return;
      } else {
        setError("");
        setPicture(pic);
        // Reading the picture
        const reader = new FileReader();
        reader.readAsDataURL(pic);
        reader.onload = (e) => {
          setReadablePicture(e.target.result);
        };
      }
    }
  };

  const handleChangePic = () => {
    setPicture("");
    setReadablePicture("");
    inputRef.current.click();
  };
  return (
    <div className="mt-8 content-center dark:text-dark_text_1 space-y-1">
      <label htmlFor="picture" className="text-sm font-bold tracking-wide">
        Picture (optional)
      </label>
      {readablePicture ? (
        <div className="">
          <img
            src={readablePicture}
            alt="uploaded img"
            className="w-20 h-20 object-cover rounded-full"
          />
          <div
            className="w-20 py-1 dark:bg-dark_bg_3 text-xs rounded-md font-bold flex items-center justify-center cursor-pointer"
            onClick={handleChangePic}
          >
            {" "}
            Change{" "}
          </div>
        </div>
      ) : (
        <div
          className="w-full h-12 dark:bg-dark_bg_3 rounded-md font-bold flex items-center justify-center cursor-pointer "
          onClick={() => inputRef.current.click()}
        >
          Upload Picture
        </div>
      )}
      <input
        type="file"
        name="picture"
        id="picture"
        hidden
        ref={inputRef}
        accept="image/png,image/jpeg,image/webp"
        onChange={handlePicture}
      />
      <div className="mt-2">
        <p className="text-red-400">{error}</p>
      </div>
    </div>
  );
};

export default Picture;
