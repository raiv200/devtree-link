import React from "react";
import {
  LinkIcon,
  LightningBoltIcon,
  GlobeAltIcon,
  FireIcon,
} from "@heroicons/react/solid";

const widgetCircleClasses = {
  container:"relative flex items-center justify-center mr-20 shadow-4xl rounded-full shadow-gray-800  dark:shadow-3xl",
  box1: "flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-50 w-[450px] h-[450px] p-3 ",
  box1__div:"relative flex items-center justify-center rounded-full bg-gray-50 dark:bg-gray-900 w-[370px] h-[370px] p-3  animate-spin-slow ",
  box1__div__child1: "absolute -left-4 top-56 w-20 h-20 p-4 rounded-full",
  box1__div__child1__icon1: "h-12 rotate-12 text-pink-500",
  box1__div__child2: "absolute  -top-[34px] w-20 h-20 p-4 rounded-full",
  box1__div__child2__icon2: "h-12 rotate-12 text-purple-500",
  box1__div__child3: "absolute  top-56  -right-4 w-20 h-20 p-4 rounded-full",
  box1__div__child3__icon3: "h-12 w-12  text-violet-500",
  box1__div__child4:"relative flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-50 w-[280px] h-[280px] p-1 ",
  box1__div__child4__div:"flex items-center justify-center rounded-full bg-gray-50 dark:bg-gray-900 w-[190px] h-[190px] p-1 ",
  box2: "absolute z-50 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-50 w-[90px] h-[90px] p-1 shadow-lg  shadow-gray-800 ",
  box2__icon4: "h-12 w-12 text-amber-400",
};

const WidgetCircle = () => {
  return (
    <div className={widgetCircleClasses.container}>
      <div className={widgetCircleClasses.box1}>
        <div className={widgetCircleClasses.box1__div}>
          <div className={widgetCircleClasses.box1__div__child1}>
            <LinkIcon
              className={widgetCircleClasses.box1__div__child1__icon1}
            />
          </div>
          <div className={widgetCircleClasses.box1__div__child2}>
            <GlobeAltIcon
              className={widgetCircleClasses.box1__div__child2__icon2}
            />
          </div>
          <div className={widgetCircleClasses.box1__div__child3}>
            <LightningBoltIcon
              className={widgetCircleClasses.box1__div__child3__icon3}
            />
          </div>

          <div className={widgetCircleClasses.box1__div__child4}>
            <div className={widgetCircleClasses.box1__div__child4__div}></div>
          </div>
        </div>
      </div>
      <div className={widgetCircleClasses.box2}>
        <FireIcon className={widgetCircleClasses.box2__icon4} />
      </div>
    </div>
  );
};

export default WidgetCircle;
