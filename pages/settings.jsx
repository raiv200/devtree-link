import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import ChangeUserName from "../components/ChangeUserName";
import EditProfile from "../components/EditProfile";
import { supabase } from "../utils/supabaseClient";
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";
import { ExclamationCircleIcon } from "@heroicons/react/outline";

const Settings = () => {
  const { user } = useMoralis();

  const router = useRouter();

  const moralisUserName = user
    ?.getUsername()
    ?.replace(/\s+/g, "")
    .toLocaleLowerCase();

  const addImageHandler = async (imgData) => {
    const { data } = await supabase
      .from("devusers")
      .update({
        imageUrl: imgData.imageUrl,
      })
      .match({ userName: moralisUserName });

    console.log("Data Stored :", data);
    console.log("User Updated");

    router.push(`/`);
  };

  return (
    <Layout>
      <>
        <Navbar />
        <div className="flex flex-col md:flex-row space-x-10">
          <ChangeUserName />
          <EditProfile onAddImageHandler={addImageHandler} />
        </div>
        <div className="mt-12 ml-[50px] md:ml-10 max-w-sm md:max-w-5xl bg-rose-500 rounded-xl flex items-center justify-center">
          <ExclamationCircleIcon className="w-28 h-28 ml-4 md:w-12 md:h-12 md:ml-4 text-rose-200"/>
          <p className=" px-2 py-2  text-rose-100 font-ibm text-md font-semibold">
            Note: You can change your username once and then add all your links
            , if you try to change your username again , the you have to add
            your links and Image URL's again.
          </p>
        </div>
      </>
    </Layout>
  );
};

export default Settings;
