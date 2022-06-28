import React from 'react'
import WidgetCircle from './WidgetCircle'

const heroClasses= {
  container:"flex flex-col-reverse space-y-6 pb-8 md:pb-0 md:space-y-0 justify-center md:flex-row md:justify-between items-center",
  box1:"flex flex-col max-w-lg items-center md:items-start md:max-w-3xl px-4 text-center space-y-8 md:px-8 lg:flex  lg:py-16 lg:px-12 lg:text-left",
  box1__p:"mt-4 text-[60px] font-extrabold tracking-tight  text-gray-600 dark:text-white sm:mt-5 sm:text-6xl lg:mt-2 xl:text-6xl" ,
  box1__p__span1:"block leading-tight font-ibm",
  box1__p__span2:"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text py-2 text-transparent leading-tight font-ibm",
  box1__p__span3:"block leading-tight font-ibm",
  box1__div:" px-12  md:mt-3 md:px-2",
  box1__div__p:"text-base font-ibm font-normal  text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl dark:text-gray-300",
  box2:"pb-12 md:pb-0",
}

const HeroSection = () => {
  return (
    <div className={heroClasses.container}>
      <div className={heroClasses.box1}>
        <p className={heroClasses.box1__p}>
          <span className={heroClasses.box1__p__span1}>
            Helps you create your
          </span>
          <span className={heroClasses.box1__p__span2}>
            Mini Portfolio
          </span>
          <span className={heroClasses.box1__p__span3}>
            in Minutes.
          </span>
        </p>
        <div className={heroClasses.box1__div}>
          <p className={heroClasses.box1__div__p}>
              Create your mini portfolio , share with others, connect with like minded.
              Chat, Share knowledge, Discuss ideas with everyone in the Community Chat forum.
          </p>
        </div>
      </div>
      <div className={heroClasses.box2}>
        <WidgetCircle />
      </div>
    </div>
  )
}

export default HeroSection
