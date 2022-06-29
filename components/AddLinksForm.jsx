import React, { useRef } from "react";
import { useMoralis } from "react-moralis";
import toast, { Toaster } from 'react-hot-toast';

const formClasses = {
  container: "relative mt-4",
  form: "px-8 py-12 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4 ",
  form__outer__box:"flex items-center justify-center  shadow-2xl dark:shadow-sm-dark  rounded-2xl  bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 p-3",
  form__inner__box:" space-y-2 w-[330px] md:w-full  bg-gray-800 rounded-xl dark:bg-gray-100  pt-4 pb-2 px-4 ",
  form__label: "text-gray-100 dark:text-gray-800  font-semibold font-ibm",
  form__input:"w-full  rounded-md py-2 px-4 block border-1 border-indigo-500 font-semibold font-ibm",
  form__div: "flex items-center justify-center ",
  form__div__btn:"text-md mt-2 font-semibold focus:outline-none font-ibm bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-1 px-4 hover:bg-gray-500 hover:text-gray-100 dark:hover:bg-gray-500 dark:hover:text-gray-100 rounded-lg transition duration-300 ease-in",
  form__btn__box: "absolute -bottom-6 left-[94px] sm:-bottom-6 sm:left-[130px] md:left-[660px] ",
  form__btn:"w-40 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-1 px-4 text-sm font-bold text-gray-50  hover:from-violet-500 hover:to-pink-500  md:px-6 md:py-2 md:text-md transition duration-300 ease-in",
};

const AddLinksForm = (props) => {
  const { user } = useMoralis();

  const userName = user?.getUsername()?.replace(/\s+/g, "").toLocaleLowerCase();
  const ethAddress = user?.get("ethAddress");

  const blogInputRef = useRef();
  const portfolioInputRef = useRef();
  const githubInputRef = useRef();
  const twitterInputRef = useRef();
  const linkedInInputRef = useRef();
  const sponsormeInputRef = useRef();



  function submitHandler(event) {
    event.preventDefault();

    const enteredBlogLink = blogInputRef.current.value;
    const enteredPortfolioLink = portfolioInputRef.current.value;
    const enteredGithubLink = githubInputRef.current.value;
    const enteredTwitterLink = twitterInputRef.current.value;
    const enteredLinkedInLink = linkedInInputRef.current.value;
    const enteredSponsormeLink = sponsormeInputRef.current.value;

    const userData = {
      blogLink: enteredBlogLink,
      portfolioLink: enteredPortfolioLink,
      githubLink: enteredGithubLink,
      twitterLink: enteredTwitterLink,
      linkedinLink: enteredLinkedInLink,
      sponsormeLink: enteredSponsormeLink,
    };

    props.onAddUserData(userData);

    
    blogInputRef.current.value ="";
    portfolioInputRef.current.value ="";
    githubInputRef.current.value = "";
    twitterInputRef.current.value = "";
    linkedInInputRef.current.value = "";
    sponsormeInputRef.current.value = "";
    
    toast.success('Links Added Successfully!!', {
      duration: 2000,
      style: {
        background: 'green',
        color: 'white',
        fontWeight: 'bolder',
        fontSize: '16px',
        padding: '10px 20px',
      },
    })
  }

  const updateLinkHandler = (event) => {
    event.preventDefault();

    const enteredBlogLink = blogInputRef.current.value;
    const enteredPortfolioLink = portfolioInputRef.current.value;
    const enteredGithubLink = githubInputRef.current.value;
    const enteredTwitterLink = twitterInputRef.current.value;
    const enteredLinkedInLink = linkedInInputRef.current.value;
    const enteredSponsormeLink = sponsormeInputRef.current.value;

     if(enteredBlogLink !=="" ){
      props.onUpdateLink1(enteredBlogLink);
    }

    if(enteredPortfolioLink !==""){
      props.onUpdateLink2(enteredPortfolioLink);
    }

    if(enteredGithubLink !=="" ){
      props.onUpdateLink3(enteredGithubLink);
    }

    if(enteredTwitterLink !=="" ){
      props.onUpdateLink4(enteredTwitterLink);
    }
    
    if(enteredLinkedInLink !==""){
      props.onUpdateLink5(enteredLinkedInLink);
    }

    if(enteredSponsormeLink !==""){
      props.onUpdateLink6(enteredSponsormeLink);
    }
    

    blogInputRef.current.value = "";
    portfolioInputRef.current.value = "";
    githubInputRef.current.value = "";
    twitterInputRef.current.value = "";
    linkedInInputRef.current.value = "";
    sponsormeInputRef.current.value = "";

    toast.success('Link Updated Successfully!!', {
      duration: 3000,
      style: {
        background: 'green',
        color: 'white',
        fontWeight: 'bolder',
        fontSize: '16px',
        padding: '10px 20px',
      },
    })
  };
  return (
    <div className={formClasses.container}>
      <form className={formClasses.form} onSubmit={submitHandler}>
        <div className={formClasses.form__outer__box}>
          <div className={formClasses.form__inner__box}>
            <label className={formClasses.form__label} htmlFor="title">
              Personal Blog Link
            </label>
            <input
              className={formClasses.form__input}
              type="text"
              id="title"
              ref={blogInputRef}
              placeholder="Enter your Blog URL"
            />
            <div className={formClasses.form__div}>
              <button onClick={updateLinkHandler} className={formClasses.form__div__btn}>
                Update Link
              </button>
            </div>
          </div>
        </div>

        <div className={formClasses.form__outer__box}>
          <div className={formClasses.form__inner__box}>
            <label className={formClasses.form__label} htmlFor="image">
              Portfolio Link
            </label>
            <input
              className={formClasses.form__input}
              type="url"
              id="image"
              ref={portfolioInputRef}
              placeholder="Enter your Portfolio URL"
            />
            <div className={formClasses.form__div}>
              <button onClick={updateLinkHandler} className={formClasses.form__div__btn}>
                Update Link
              </button>
            </div>
          </div>
        </div>

        <div className={formClasses.form__outer__box}>
          <div className={formClasses.form__inner__box}>
            <label className={formClasses.form__label} htmlFor="address">
              Github Link
            </label>
            <input
              className={formClasses.form__input}
              type="text"
              id="address"
              ref={githubInputRef}
              placeholder="Enter your Github URL"
            />
            <div className={formClasses.form__div}>
              <button onClick={updateLinkHandler} className={formClasses.form__div__btn}>
                Update Link
              </button>
            </div>
          </div>
        </div>

        <div className={formClasses.form__outer__box}>
          <div className={formClasses.form__inner__box}>
            <label className={formClasses.form__label} htmlFor="description">
              Twitter Link
            </label>
            <input
              className={formClasses.form__input}
              id="description"
              ref={twitterInputRef}
              placeholder="Enter your Twitter URL"
            />
            <div className={formClasses.form__div}>
              <button onClick={updateLinkHandler} className={formClasses.form__div__btn}>
                Update Link
              </button>
            </div>
          </div>
        </div>

        <div className={formClasses.form__outer__box}>
          <div className={formClasses.form__inner__box}>
            <label className={formClasses.form__label} htmlFor="description">
              LinkedIn Link
            </label>
            <input
              className={formClasses.form__input}
              id="description"
              ref={linkedInInputRef}
              placeholder="Enter your LinkedIn URL"
            />
            <div className={formClasses.form__div}>
              <button onClick={updateLinkHandler} className={formClasses.form__div__btn}>
                Update Link
              </button>
            </div>
          </div>
        </div>

        <div className={formClasses.form__outer__box}>
          <div className={formClasses.form__inner__box}>
            <label className={formClasses.form__label} htmlFor="description">
              Sponsor Me Link
            </label>
            <input
              className={formClasses.form__input}
              id="description"
              ref={sponsormeInputRef}
              placeholder="Enter your SponsorMe URL"
            />
            <div className={formClasses.form__div}>
              <button onClick={updateLinkHandler} className={formClasses.form__div__btn}>
                Update Link
              </button>
            </div>
          </div>
        </div>

        <div className={formClasses.form__btn__box}>
          <button className={formClasses.form__btn}>Add Links</button>
        </div>
      </form>
      <Toaster position="top-center" />
    </div>
  );
};

export default AddLinksForm;



