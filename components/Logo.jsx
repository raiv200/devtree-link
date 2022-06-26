import Link from "next/link";

const logoClasses={
  container:"my-2 flex items-center space-x-1 text-indigo-500 ",
  container__span:"font-bold font-ibm text-3xl tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent whitespace-nowrap",
}

const Logo = () => {
  return (
    <Link href="/">
      <a className={logoClasses.container}>
        <span className={logoClasses.container__span}>
          devtree.link
        </span>
      </a>
    </Link>
  );
};

export default Logo;
