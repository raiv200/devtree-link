import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import { useMoralis } from "react-moralis";

const layoutClasses={
  container:"flex min-h-screen flex-col py-2",
  container__main:"flex-grow container mx-auto px-4 sm:px-6",
}

const Layout = ({ children}) => {

  const { isAuthenticated, logout, authenticate, user } = useMoralis();
 

  return (
    <>
      <Head>
        <title>Devtree.link</title>
        <link rel="icon" href="/link-solid.svg" />
      </Head>

      <div className={layoutClasses.container}>
       <Header user={user} logout={logout} isAuthenticated={isAuthenticated} authenticate={authenticate} />
        <main className={layoutClasses.container__main}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;