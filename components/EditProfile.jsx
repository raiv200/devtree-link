import React, { useState, useEffect,useRef } from 'react'
import { useMoralis } from 'react-moralis'
import Avatar from './Avatar'
import toast, { Toaster } from 'react-hot-toast'
import { supabase } from '../utils/supabaseClient'

const editProfileClasses = {
  container: ' mt-10 flex flex-col space-y-4  md:ml-10',
  container__p:
    'text-xl font-semibold font-ibm text-gray-800 dark:text-gray-50',
  box: ' flex justify-center w-[330px] h-[260px] sm:w-[360px] sm:h-[260px] md:w-[420px] md:h-[260px] bg-gray-900 dark:bg-gray-200 rounded-lg px-8 py-10',
  box__div: 'flex flex-col items-center md:justify-between  ',
  box__div__inner: 'relative md:w-[350px] flex',
  form: ' flex flex-col',
  form__div1: 'flex flex-col space-y-2',
  form__div1__label:
    ' ml-4 text-gray-100 dark:text-slate-900  text-sm font-medium leading-6',
  form__div1__input:
    'mt-1 ml-3 px-4 py-[6px] md:px-4 md:py-2  bg-slate-100 rounded-lg border-2 border-violet-500 focus:outline-none text-sm leading-6 text-slate-700',
  form__div2: 'absolute right-8 -bottom-10 md:right-0 md:bottom-1 ml-4',
  form__div2__btn:
    'rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-1 px-4 text-sm font-bold text-gray-50  hover:from-violet-500 hover:to-pink-500  md:px-4 md:py-2 md:text-md transition duration-300 ease-in',
}

const EditProfile = (props) => {
  const imgUrlRef = useRef()

  const { user } = useMoralis()

  const ethAdd = user?.get('ethAddress');

  const [results, setResults] = useState([])
  const [newUser, setNewUser] = useState();
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);

    const fetchUsers = async () => {
      const { data } = await supabase
        .from('devusers')
        .select('*')
        .eq('ethAddress', ethAdd)

      setResults(data)

      data?.map((user) => setNewUser(user.userName))
      console.log('Data fetched :', data)
    }

    fetchUsers();
    setIsloading(false);
  }, [])

  const moralisUserName = user
    ?.getUsername()
    ?.replace(/\s+/g, '')
    .toLocaleLowerCase()

  function handleSubmit(event) {
    event.preventDefault()

    const imgUrl = imgUrlRef.current.value

    const imgData = {
      imageUrl: imgUrl,
    }
    props.onAddImageHandler(imgData)
    console.log(imgUrl)

    imgUrlRef.current.value = ''

    toast.success('Image Updated!!', {
      duration: 3000,
      style: {
        background: 'green',
        color: 'white',
        fontWeight: 'bolder',
        fontSize: '16px',
        padding: '10px 20px',
      },
    })
  }

  return (
    <div className={editProfileClasses.container}>
      <p className={editProfileClasses.container__p}>Change Image</p>
      <div className={editProfileClasses.box}>
        <div className={editProfileClasses.box__div}>
          {<Avatar username={newUser ? newUser : ethAdd?.substring(0, 8)} />}
          <div className={editProfileClasses.box__div__inner}>
            <form className={editProfileClasses.form}>
              <div className={editProfileClasses.form__div1}>
                <label
                  className={editProfileClasses.form__div1__label}
                  htmlFor="title"
                >
                  Enter Image Url
                </label>
                <input
                  className={editProfileClasses.form__div1__input}
                  type="text"
                  required
                  ref={imgUrlRef}
                />
              </div>
              <div className={editProfileClasses.form__div2}>
                <button
                  onClick={handleSubmit}
                  className={editProfileClasses.form__div2__btn}
                >
                  Update Image
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster position="top-center" />
    </div>
  )
}

export default EditProfile
