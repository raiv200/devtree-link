import React from "react";
import { RWebShare } from "react-web-share";

const shareButtonClasses={
    btn:"rounded-lg bg-gradient-to-r from-cyan-400  to-blue-500 py-2 px-4 text-sm font-bold text-gray-50  hover:from-violet-500 hover:to-pink-500  md:px-5 md:py-2 md:text-lg transition duration-300 ease-in",
}

const URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://devtree.link";


const ShareButton = ({username}) => {
     
  return (
    <div>
      <RWebShare
        data={{
          text: "Devtree.link - Profile",
          url: `${URL}/${username}`,
          title: "Devtree.link",
        }}
        onClick={() => console.log("Shared successfully!")}
      >
        <button className={shareButtonClasses.btn}>Share on Web</button>
      </RWebShare>
    </div>
  );
};

export default ShareButton;