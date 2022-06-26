import React from "react";
import Layout from "../components/Layout";
import Messages from "../components/Messages";
import Navbar from "../components/Navbar";


const communityChatClasses={
  container:" pt-6 mt-6",
};

const CommunityChat = () => {
  return (
    <Layout>
      <>
        <Navbar />
        
        <div className={communityChatClasses.container}>
             <Messages />
        </div>
      </>
    </Layout>
  );
};

export default CommunityChat;
