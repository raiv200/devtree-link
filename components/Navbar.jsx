import React from 'react';
import Link from "next/link";
import UserName from './UserName';
import { useMoralis } from 'react-moralis';

const navClasses={
  container:"flex flex-col md:flex-row min-w-full h-40 md:h-20 items-center md:justify-between  pt-3 pl-0 sm:pl-2 sm:pt-2 md:pt-1 md:pl-6 ",
  box:" flex  items-baseline  space-x-1 py-2 sm:p-2 sm:space-x-6 md:space-x-10 md:p-2 ",
  box__link__p:"cursor-pointer text-gray-800 dark:text-gray-100 text-sm sm:text-md md:text-lg font-medium font-ibm px-2 py-1 opacity-80  rounded-lg hover:text-gray-50 hover:bg-gray-800/80 dark:hover:bg-gray-50/30 transition duration-300 ease-in",
}

const Navbar = () => {
  const { user } = useMoralis();

  const username = user?.getUsername()?.replace(/\s+/g, "").toLocaleLowerCase();

  return (
    <div className={navClasses.container}>
        <div className={navClasses.box}>
         <Link href="/dashboard">
            <p className={navClasses.box__link__p}>
              Links
            </p>
          </Link>

          <Link href="/settings">
            <p className={navClasses.box__link__p}>
              Settings
            </p>
          </Link>
          
          <Link href={`/${username}`}>
            <p className={navClasses.box__link__p}>
               My Profile
            </p>
          </Link>

          <Link href="/community-chat">
            <p className={navClasses.box__link__p}>
              Community Chat
            </p>
          </Link>
        </div>
        <UserName />
    </div>
  )
}

export default Navbar