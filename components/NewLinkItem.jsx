import React from 'react'

const newLinkItemClasses={
   container:"flex items-center justify-center w-[280px] px-2 py-3 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500  hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500  hover:scale-110 shadow-2xl transition duration-200 ease-in",
   link:"flex text-md decoration-none font-semibold font-ibm  text-gray-50 items-center justify-center",
};

const NewLinkItem = ({ link, title}) => {
  return (
    <div className={newLinkItemClasses.container}>
             <a href={link} target="_blank" className={newLinkItemClasses.link}>
                {title}
            </a>
    </div>
  )
}

export default NewLinkItem