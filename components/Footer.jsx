import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

const footerClasses = {
  container:
    "relative flex justify-between items-center px-4 sm:px-6 md:px-12 pt-6 mt-12",
  box__left: "text-center text-sm text-gray-500",
  box__left__span: "dark:text-gray-100 text-gray-900 font-bold text-lg mr-2",
  box__middle: "absolute -top-1 left-[670px] flex space-x-4 ",
  box__middle__img:"",
  box__right: "dark:text-gray-100 text-gray-900 font-bold text-md mr-2",
  box__right__span:"ml-2 font-semibold font-ibm text-lg tracking-tight bg-gradient-to-r from-indigo-400 via-purple-600 to-pink-500 bg-clip-text text-transparent",
};



const Footer = () => {
  const { systemTheme, theme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <footer className={footerClasses.container}>
      <div className={footerClasses.box__left}>
        <span className={footerClasses.box__left__span}> devtree.link </span>{" "}
        &copy; {new Date().getFullYear()} All Rights Reserved
      </div>
      {/* Linode X Hashnode Hackathon */}
      <div className={footerClasses.box__middle}>
        {currentTheme === "dark" ? (
          <Image
            src="/sponsor-logo-dark.png"
            width={180}
            height={60}
            className={footerClasses.box__middle__img}
          />
        ) : (
          <Image
            src="/sponsor-logo-light.png"
            width={180}
            height={60}
            className={footerClasses.box__middle__img}
          />
        )}
      </div>
      <div className={footerClasses.box__right}>
        Made with ❤️ by{" "}
        <span className={footerClasses.box__right__span}>
          <Link href="https://twitter.com/raivikas200">@raivikas</Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
