import React, { useEffect, useState } from "react";
import AddLinksForm from "../components/AddLinksForm";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { supabase } from "../utils/supabaseClient";
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";
import GetStarted from "../components/GetStarted";

function Dashboard() {
  const { user ,isAuthenticated } = useMoralis();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {    
      router.push("/dashboard"); 
    }else{
      router.push("/"); 
    }
  },[isAuthenticated]);
      
  const moralisUserName = user
    ?.getUsername()
    ?.replace(/\s+/g, "")
    .toLocaleLowerCase();

  const [results, setResults] = useState([]);

  const addUserDataHandler = async (enteredUserData) => {
    let userExist = false;

    const { data } = await supabase.from("devusers").select("userName");

    data.map((user) => {
      if (user.userName == moralisUserName) {
        userExist = true;
      }
    });

    console.log(userExist);

    if (userExist === false) {
      const { data } = await supabase
        .from("devusers")
        .insert([
          {
            userName: enteredUserData.userName,
            ethAddress: enteredUserData.ethAddress,
            blogLink: enteredUserData.blogLink,
            portfolioLink: enteredUserData.portfolioLink,
            githubLink: enteredUserData.githubLink,
            twitterLink: enteredUserData.twitterLink,
            linkedinLink: enteredUserData.linkedinLink,
            sponsormeLink: enteredUserData.sponsormeLink,
          },
        ])
        .single();

      console.log("Data Stored :", data);
      console.log("New User inserted");
      router.push(`/${moralisUserName}`);
    } else {
      const { data } = await supabase
        .from("devusers")
        .update({
          blogLink: enteredUserData.blogLink,
          portfolioLink: enteredUserData.portfolioLink,
          githubLink: enteredUserData.githubLink,
          twitterLink: enteredUserData.twitterLink,
          linkedinLink: enteredUserData.linkedinLink,
          sponsormeLink: enteredUserData.sponsormeLink,
        })
        .match({ userName: moralisUserName });

      console.log("Data Stored :", data);
      console.log("User Updated");

      router.push(`/${moralisUserName}`);
    }
  };

  const updateLink1Handler = async (enteredUserData) => {
    const { data } = await supabase
      .from("devusers")
      .update({
        blogLink: enteredUserData,
      })
      .match({ userName: moralisUserName });

    console.log("Data Stored :", data);
    console.log("User Updated");
  };

  const updateLink2Handler = async (enteredUserData) => {
    const { data } = await supabase
      .from("devusers")
      .update({
        portfolioLink: enteredUserData,
      })
      .match({ userName: moralisUserName });

    console.log("Data Stored :", data);
    console.log("User Updated");
  };

  const updateLink3Handler = async (enteredUserData) => {
    const { data } = await supabase
      .from("devusers")
      .update({
        githubLink: enteredUserData,
      })
      .match({ userName: moralisUserName });

    console.log("Data Stored :", data);
    console.log("User Updated");
  };

  const updateLink4Handler = async (enteredUserData) => {
    const { data } = await supabase
      .from("devusers")
      .update({
        twitterLink: enteredUserData,
      })
      .match({ userName: moralisUserName });

    console.log("Data Stored :", data);
    console.log("User Updated");
  };

  const updateLink5Handler = async (enteredUserData) => {
    const { data } = await supabase
      .from("devusers")
      .update({
        linkedinLink: enteredUserData,
      })
      .match({ userName: moralisUserName });

    console.log("Data Stored :", data);
    console.log("User Updated");
  };

  const updateLink6Handler = async (enteredUserData) => {
    const { data } = await supabase
      .from("devusers")
      .update({
        sponsormeLink: enteredUserData,
      })
      .match({ userName: moralisUserName });

    console.log("Data Stored :", data);
    console.log("User Updated");
  };

  return (
    <Layout>
      <>
        <Navbar />
        <div className="flex flex-col-reverse md:flex-row  md:justify-between items-center mt-8 md:mt-0 ">
          <div className="flex-1">
            <AddLinksForm
              onAddUserData={addUserDataHandler}
              onUpdateLink1={updateLink1Handler}
              onUpdateLink2={updateLink2Handler}
              onUpdateLink3={updateLink3Handler}
              onUpdateLink4={updateLink4Handler}
              onUpdateLink5={updateLink5Handler}
              onUpdateLink6={updateLink6Handler}
            />
          </div>
          <GetStarted />
        </div>
      </>
    </Layout>
  );
}

export default Dashboard;
