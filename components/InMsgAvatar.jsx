import React, { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { supabase } from "../utils/supabaseClient";

const inMsgAvatarClass = {
  container:"flex items-center justify-center rounded-full w-[48px] h-[48px] bg-gradient-to-r  from-[#4f6ff4] via-[#287af9] to-[#00e5c8]",
  box:"flex capitalize font-ibm font-bold text-2xl w-[40px] h-[40px] justify-center items-center bg-white dark:bg-gray-900 rounded-full",
  image:"bg-gray-900 rounded-full w-[40px] h-[40px]'}  cursor-pointer hover:opacity-75",
}

const InMsgAvatar = ({username }) => {
  const { user } = useMoralis();

  const userName = user?.getUsername()?.substring(0, 1);
  const  newUser = username.replace(/\s+/g, "").toLocaleLowerCase();


  const [imageUrl, setImageUrl] =useState();
  const [results, setResults]= useState([]);

  useEffect(() => {
    
     const fetchImageUrl = async() => {

        const { data } = await supabase
        .from("devusers")
        .select("*")
        .eq("userName", newUser);
      
        setResults(data);

        data.map(user => (
            setImageUrl(user.imageUrl)
        ))
       
        console.log("Data fetched :", data);
     }

      fetchImageUrl();

  },[imageUrl,userName]);

  return (
    <div className={inMsgAvatarClass.container}>
      <div className={inMsgAvatarClass.box}>
        <span>
          {imageUrl ? (
            <img
              className={inMsgAvatarClass.image}
              src={imageUrl}
            />
          ) : (
            <p> {username?.substring(0, 1)}</p>
          )}
       
        </span>
      </div>
    </div>
  );
};

export default InMsgAvatar;