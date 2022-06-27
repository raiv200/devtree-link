import React from 'react'
import WidgetCircle from './WidgetCircle'

const heroClasses= {
  container:"flex justify-between items-center",
  box:"flex flex-col max-w-md sm:max-w-3xl sm:px-6 sm:text-center space-y-8 md:px-8 lg:flex  lg:py-16 lg:px-12 lg:text-left",
  box__p:"mt-4 text-4xl font-extrabold tracking-tight  text-gray-600 dark:text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl" ,
  box__p__span1:"block leading-tight font-ibm",
  box__p__span2:"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text py-2 text-transparent leading-tight font-ibm",
  box__p__span3:"block leading-tight font-ibm",
  box__div:"mt-3 px-2",
  box__div__p:"text-base font-ibm font-normal  text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl dark:text-gray-300",
}

const HeroSection = () => {
  return (
    <div className={heroClasses.container}>
      <div className={heroClasses.box}>
        <p className={heroClasses.box__p}>
          <span className={heroClasses.box__p__span1}>
            Helps you create your
          </span>
          <span className={heroClasses.box__p__span2}>
            Mini Portfolio
          </span>
          <span className={heroClasses.box__p__span3}>
            in Minutes.
          </span>
        </p>
        <div className={heroClasses.box__div}>
          <p className={heroClasses.box__div__p}>
              Create your mini portfolio , share with others, connect with like minded.
              Chat, Share knowledge, Discuss ideas with everyone in the Community Chat forum.
          </p>
        </div>
      </div>
      <div>
        <WidgetCircle />
      </div>
    </div>
  )
}

export default HeroSection
