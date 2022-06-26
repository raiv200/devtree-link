import React from 'react';
import { useMoralis } from "react-moralis";
import Avatar from './Avatar';

const changeUserNameClasses= {
    container:"mt-10 flex flex-col  space-y-4 ml-10",
    container__p:"text-xl font-semibold font-ibm text-gray-800 dark:text-gray-50",
    box:" flex flex-col items-center justify-center space-y-10 w-[400px] h-[260px] bg-gray-900 dark:bg-gray-200 rounded-lg  py-8",
    box__div:"flex items-center space-x-10",
    box__div__inner:"flex flex-col",
    box__div__inner__p1:"font-ibm font-semibold text-lg text-gray-50 dark:text-gray-900 capitalize",
    box__div__inner__p2:"font-ibm font-semibold text-sm text-gray-200 dark:text-gray-600 lowercase",
    box__btn:"rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-1 px-4 text-sm font-bold text-gray-50  hover:from-violet-500 hover:to-pink-500  md:px-4 md:py-2 md:text-md transition duration-300 ease-in",

};

const ChangeUserName = () => {

    const { setUserData, isUserUpdating, user } = useMoralis();

    const setUserName = () => {
        const username = prompt(
            `Enter the new user name:(current:${user?.getUsername()})`
        );
        if (!username) return;
        setUserData({
            username: username
        });
    };

    const moralisUserName = user
    ?.getUsername()
    ?.replace(/\s+/g, "")
    .toLocaleLowerCase();

    return (
        <div className={changeUserNameClasses.container}>
            <p className={changeUserNameClasses.container__p}>Change Username</p>
            <div className={changeUserNameClasses.box}>
                <div className={changeUserNameClasses.box__div}>
                    <Avatar username={moralisUserName} />
                    <div className={changeUserNameClasses.box__div__inner}>
                        <p className={changeUserNameClasses.box__div__inner__p1}>
                            {user?.getUsername()}
                        </p>
                        <p className={changeUserNameClasses.box__div__inner__p2}>
                            @{user?.getUsername()?.replace(/\s+/g, '')}
                        </p>
                    </div>
                </div>
                <div className="">
                    <button disabled={isUserUpdating} onClick={setUserName} className={changeUserNameClasses.box__btn}>
                        Edit Username
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChangeUserName