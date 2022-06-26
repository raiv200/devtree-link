import React, { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { supabase } from "../utils/supabaseClient";

const avatarClasses= {
  container:"flex items-center justify-center rounded-full w-[80px] h-[80px] bg-gradient-to-r  from-[#4f6ff4] via-[#287af9] to-[#00e5c8]",
  box:"flex capitalize font-ibm font-bold text-4xl w-[70px] h-[70px] justify-center items-center bg-white dark:bg-gray-900 rounded-full",
  image:"bg-gray-900 rounded-full w-[70px] h-[70px]'}  cursor-pointer hover:opacity-75",
}

const Avatar = ({username}) => {
  const { user } = useMoralis();

  const userName = username?.substring(0, 1);

  const moralisUserName = user
  ?.getUsername()
  ?.replace(/\s+/g, "")
  .toLocaleLowerCase();

  const [imageUrl, setImageUrl] =useState();
  const [results, setResults]= useState([]);

  useEffect(() => {
    
     const fetchImageUrl = async() => {

        const { data } = await supabase
        .from("devusers")
        .select("*")
        .eq("userName", username);
      
        setResults(data);

        data.map(user => (
            setImageUrl(user.imageUrl)
        ))

        console.log(moralisUserName);
       
        console.log("Data fetched :", data);
     }

      fetchImageUrl();

  },[imageUrl,userName]);

  return (
    <div className={avatarClasses.container}>
      <div className={avatarClasses.box}>
        <span>
          {imageUrl ? (
            <img
              className={avatarClasses.image}
              src={imageUrl}
            />
          ) : (
            <p>{userName}</p>
          )}
        </span>
      </div>
    </div>
  );
};

export default Avatar;
