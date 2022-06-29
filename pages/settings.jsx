import React from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import ChangeUserName from '../components/ChangeUserName'
import EditProfile from '../components/EditProfile'
import { supabase } from '../utils/supabaseClient'
import { useMoralis } from 'react-moralis'
import { useRouter } from 'next/router'
import { ExclamationCircleIcon } from '@heroicons/react/outline'
import toast, { Toaster } from 'react-hot-toast'

const Settings = () => {
  const { user } = useMoralis()

  const router = useRouter()

  const moralisUserName = user
    ?.getUsername()
    ?.replace(/\s+/g, '')
    .toLocaleLowerCase()

  const ethAdd = user?.get('ethAddress')

  const addImageHandler = async (imgData) => {
    const { data } = await supabase
      .from('devusers')
      .update({
        imageUrl: imgData.imageUrl,
      })
      .match({ ethAddress: ethAdd })

    console.log('Data Stored :', data)
    console.log('User Updated')

    router.push(`/`)
  }

  const newUserHandler = async (userData) => {
    let userExist = false;

    const { data } = await supabase.from("devusers").select("ethAddress");

    data.map((user) => {
      if (user.ethAddress == ethAdd) {
        userExist = true;
      }
    });

    console.log(userExist);

    if (userExist === false) {
      const { data } = await supabase
        .from("devusers")
        .insert([
          {
            userName: userData.userName,
            ethAddress: userData.ethAddress,
          },
        ])
        .single();

      console.log("Data Stored :", data);
      console.log("New User inserted");
      
      toast.success('Username Created!!', {
        duration: 3000,
        style: {
          background: 'green',
          color: 'white',
          fontWeight: 'bolder',
          fontSize: '16px',
          padding: '10px 20px',
        },
      });

      router.push(`/`);
    } else {
      const { data } = await supabase
        .from("devusers")
        .update({
          userName:userData.userName
        })
        .match({ ethAddress: ethAdd });

      console.log("Data Stored :", data);
      console.log("User Updated");
      
      toast.success('Username Updated!!', {
        duration: 3000,
        style: {
          background: 'green',
          color: 'white',
          fontWeight: 'bolder',
          fontSize: '16px',
          padding: '10px 20px',
        },
      });

      router.push(`/`);
    }
  };
  


  return (
    <Layout>
      <>
        <Navbar />
        <div className="flex flex-col items-center justify-center mt-8 md:mt-0 md:items-start md:justify-start md:flex-row space-y-16 md:space-y-10 md:space-x-10">
          <ChangeUserName onChangeNewUser={newUserHandler} />
          <EditProfile onAddImageHandler={addImageHandler} />
        </div>
        
      </>
    </Layout>
  )
}

export default Settings
