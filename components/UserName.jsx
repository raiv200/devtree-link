import React,{useState, useEffect} from 'react'
import { useMoralis } from 'react-moralis'
import { supabase } from '../utils/supabaseClient'

import Avatar from './Avatar'

const userNameClasses = {
  container: 'flex flex-col mt-4 md:ml-4 md:mt-10 ',
  box: 'flex items-center space-x-4 rounded-lg ring-4 ring-gray-300 shadow-2xl  dark:shadow-lg dark:shadow-gray-500 dark:ring-gray-500 py-2 px-8 bg-gray-300/50 dark:bg-gray-700/50 ',
  box__div: 'flex flex-col ',
  box__div__p1:
    'font-ibm font-semibold text-lg text-gray-900 dark:text-gray-100 capitalize',
  box__div__p2:
    'font-ibm font-semibold text-sm text-gray-400 dark:text-gray-200 lowercase',
}

const UserName = () => {
  const { user } = useMoralis()

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

  const moralisUserName = user
    ?.getUsername()
    ?.replace(/\s+/g, '')
    .toLocaleLowerCase()

  return (
    <div className={userNameClasses.container}>
      <div className={userNameClasses.box}>
        <Avatar username={newUser ? newUser : ethAdd?.substring(0, 8)} />
        <div className={userNameClasses.box__div}>
          <p className={userNameClasses.box__div__p1}>
            {`@${newUser ? newUser : ethAdd?.substring(0, 8)}`}
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserName
