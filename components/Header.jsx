import Logo from "./Logo";
import ThemeChanger  from "./ThemeChanger";
import { useRouter } from "next/router";

const headerClasses={
  container:"h-20 border-b border-gray-300  shadow-sm dark:border-gray-700 px-8",
  box:"container px-4 sm:px-6 py-4 flex justify-between items-center",
  box__div1:"flex space-x-6",
  box__div1__inner:"rounded-xl justify-center items-center hover:bg-gray-200 dark:hover:bg-indigo-100 px-4 py-1 text-sm font-bold text-gray-600  hover:text-gray-800 dark:text-indigo-200  dark:hover:text-indigo-600 transition duration-300 ease-in  lg:text-lg",
  box__div2:"flex space-x-10 ",
  box__div2__btn:"rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-1 px-4 text-sm font-bold text-gray-50  hover:from-violet-500 hover:to-pink-500  md:px-5 md:py-2 md:text-lg transition duration-300 ease-in",
}

const Header = ({ logout, isAuthenticated, authenticate, user }) => {

  
   const router = useRouter();

   const signOut = () => {
     logout();
     router.push("/");
   };

  return (
    <header className={headerClasses.container}>
      <div className={headerClasses.box}>
        {/* Logo */}
        <Logo />
        <div className={headerClasses.box__div1}>
          <div className={`${isAuthenticated ? 'flex' : 'hidden'} ${headerClasses.box__div1__inner}`}>
            {isAuthenticated &&
              <span>
                {isAuthenticated && user.get("ethAddress").substring(0, 8)}...
                {isAuthenticated && user.get("ethAddress").substring(user.get("ethAddress")?.length - 7)}
              </span>
            }
          </div>
          <div className={headerClasses.box__div2}>
            <button
              onClick={isAuthenticated ? signOut : authenticate}
              className={headerClasses.box__div2__btn}
            >
              {isAuthenticated ? 'Disconnect Wallet' : 'Connect Wallet'}
            </button>

          </div>
          <ThemeChanger />
        </div>
      </div>
    </header>
  );
};

export default Header;
