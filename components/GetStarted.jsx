import React from "react";

const getStartedClasses={
    container:"flex flex-col items-center space-y-4 w-[280px] h-[390px] bg-gradient-to-t from-purple-500 to-pink-300 rounded-xl md:px-4 md:py-6",
    container__h3:"text-lg font-ibm font-bold text-purple-600",
    container__p:"text-md font-ibm font-bold text-purple-800",
    container__div:"flex flex-col items-center space-y-2",
    container__div__p:"text-sm font-ibm font-bold text-gray-50",

}

const GetStarted = () => {
  return (
    <div className={getStartedClasses.container}>
      <h3 className={getStartedClasses.container__h3}>
        Welcome to Devtree.link
      </h3>
      <p className={getStartedClasses.container__p}>
        Let's get you set up.
      </p>
      <div className={getStartedClasses.container__div}>
        <p className={getStartedClasses.container__div__p}>
          1. First, go to Settings Tab and change your Username.
        </p>
        <p className={getStartedClasses.container__div__p}>
          2. Go to Links Tab and add your Social/Dev Profile Links.
        </p>
        <p className={getStartedClasses.container__div__p}>
          3. Update your Image in the Settings Tab.
        </p>
        <p className={getStartedClasses.container__div__p}>
          4. Visit My Profile Tab to see your Devtree.
        </p>
        <p className={getStartedClasses.container__div__p}>
          5. Share your Devtree profile link with others.
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
