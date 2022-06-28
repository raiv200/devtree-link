import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";

const themeChangerClasses = {
  btn1:"w-7 h-7 md:w-10 md:h-10 mt-1 md:mt-0 bg-gray-200 rounded-lg dark:bg-gray-700 flex items-center justify-center hover:ring-2 ring-yellow-500 transition-all",
  btn1__icon:"w-5 h-5 md:w-6 md:h-6 text-yellow-500 ",
  btn2:"w-7 h-7 md:w-10 md:h-10 bg-gray-200 rounded-lg dark:bg-gray-700 flex items-center justify-center hover:ring-2 ring-gray-500 transition-all",
  btn2__icon:"w-5 h-5 md:w-6 md:h-6 text-gray-600 ",
}

const ThemeChanger = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button className={themeChangerClasses.btn1}>
          <SunIcon
            className={themeChangerClasses.btn1__icon}
            role="button"
            onClick={() => setTheme("light")}
          />
        </button>
      );
    } else {
      return (
        <button className={themeChangerClasses.btn2}>
          <MoonIcon
            className={themeChangerClasses.btn2__icon}
            role="button"
            onClick={() => setTheme("dark")}
          />
        </button>
      );
    }
  };

  return <div>{renderThemeChanger()}</div>;
};

export default ThemeChanger;
