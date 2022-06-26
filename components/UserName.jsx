import React from 'react';
import { useMoralis } from "react-moralis";

import Avatar from './Avatar';

const userNameClasses= {
    container:"flex flex-col ml-4 mt-10",
    box:"flex items-center space-x-4 rounded-lg  py-2 px-8",
    box__div:"flex flex-col ",
    box__div__p1:"font-ibm font-semibold text-lg text-gray-900 dark:text-gray-100 capitalize",
    box__div__p2:"font-ibm font-semibold text-sm text-gray-400 dark:text-gray-200 lowercase",

};

const UserName = () => {

    const {  user } = useMoralis();
  
    const moralisUserName = user
      ?.getUsername()
      ?.replace(/\s+/g, "")
      .toLocaleLowerCase();

    return (
        <div className={userNameClasses.container}>
            <div className={userNameClasses.box}>
                    <Avatar username={moralisUserName} />
                    <div className={userNameClasses.box__div}>
                        <p className={userNameClasses.box__div__p1}>
                            {user?.getUsername()}
                        </p>
                        <p className={userNameClasses.box__div__p2}>
                            @{user?.getUsername()?.replace(/\s+/g, '')}
                        </p>
                    </div>
            </div>
        </div>
    )
}

export default UserName