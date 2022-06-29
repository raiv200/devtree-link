import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useMoralis } from 'react-moralis'
import Avatar from './Avatar'
import toast, { Toaster } from 'react-hot-toast'
import { supabase } from '../utils/supabaseClient'

const changeUserNameClasses = {
  container: 'mt-10 flex flex-col space-y-4  md:ml-10',
  container__p:
    'text-xl font-semibold font-ibm text-gray-800 dark:text-gray-50',
  box: ' flex flex-col items-center justify-center space-y-10 w-[330px] h-[240px] sm:w-[360px] sm:h-[240px] md:w-[400px] md:h-[260px] bg-gray-900 dark:bg-gray-200 rounded-lg  py-8',
  box__div: 'flex items-center space-x-10',
  box__div__inner: 'flex flex-col',
  box__div__inner__p1:
    'font-ibm font-semibold text-lg text-gray-50 dark:text-gray-900 capitalize',
  box__div__inner__p2:
    'font-ibm font-semibold text-xl text-gray-200 dark:text-gray-600 lowercase',
  box__btn:
    'rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-1 px-4 text-sm font-bold text-gray-50  hover:from-violet-500 hover:to-pink-500  md:px-4 md:py-2 md:text-md transition duration-300 ease-in',
}

const ChangeUserName = (props) => {
  const { user } = useMoralis()
  const router = useRouter()

  const ethAdd = user?.get('ethAddress')

  const [results, setResults] = useState([])
  const [newUser, setNewUser] = useState();
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    const fetchUsers = async () => {
      const { data } = await supabase
        .from('devusers')
        .select('*')

      setResults(data)

      data?.map((user) => user.ethAddress == ethAdd && setNewUser(user.userName))
      console.log('Data fetched :', data)
    }

    fetchUsers();
    setIsloading(false);
  }, [newUser])


  const setUserName = () => {
    const username = prompt(
      `Enter the new user name:(current:${user?.getUsername()})`
    )
    const userName = username?.replace(/\s+/g, '')

    const userData = {
      userName: userName,
      ethAddress:ethAdd
    }

    if (!username) return

    results.map(user => {
        if(user.userName === username){
            
            toast.error('Username Already Exists!!', {
                duration: 3000,
                style: {
                  background: 'red',
                  color: 'white',
                  fontWeight: 'bolder',
                  fontSize: '16px',
                  padding: '10px 20px',
                },
              })
              router.push('/dashboard')
              
              return;
        }
    })

    props.onChangeNewUser(userData);

    router.push('/')
  }

  const moralisUserName = user
    ?.getUsername()
    ?.replace(/\s+/g, '')
    .toLocaleLowerCase()

  return (
    <div className={changeUserNameClasses.container}>
      <p className={changeUserNameClasses.container__p}>Change Username</p>
      <div className={changeUserNameClasses.box}>
        <div className={changeUserNameClasses.box__div}>
          <Avatar username={newUser ? newUser : ethAdd?.substring(0, 8)} />
          <div className={changeUserNameClasses.box__div__inner}>
            {
              <p className={changeUserNameClasses.box__div__inner__p1}>
                 {`@${newUser ? newUser : ethAdd?.substring(0,8)}`}
              </p>
            }
          </div>
        </div>
        <div className="">
          <button
            onClick={setUserName}
            className={changeUserNameClasses.box__btn}
          >
            Change Username
          </button>
        </div>
      </div>
      <Toaster position="top-center" />
    </div>
  )
}

export default ChangeUserName
