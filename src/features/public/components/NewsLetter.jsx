import React, { useEffect, useState, useRef} from "react";
import newsLetteLogo from "../../../assets/homePage/flower_newsletter.png";
import rightArrow from "../../../assets/homePage/arrow-right.png";
import { initial } from "lodash";
import {motion,useInView,useAnimation} from 'framer-motion'
import Button from "./Button";
import { itemVariants } from "../../../utils";

const NewsLetter = ({ color }) => {
  
  const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.1 })
    const controls = useAnimation()
  
    if (isInView) {
      controls.start('visible')
    }
  return (
    <motion.div ref={ref} animate={controls} initial='hidden' variants={itemVariants}
      className={`xl:max-w-[1062px] xl:px-14 py-7 flex flex-col justify-center items-center rounded-lg relative mx-auto  xl:h-[212px] bg-${color}-500 border-2 border-black border-dashed`}
    >
      <div className=" relative">
        <div className=" xl:inline-block hidden h-10 w-10 absolute left-0 top-0">
          <img src={`${newsLetteLogo}`} />
        </div>
        <div className="xl:max-w-[620px] flex flex-col justify-center items-center gap-4    relative ">
          <h1 className="text-2xl leading-9 my-2 text-white font-poppin font-bold text-center">
            "Stay Connected with Us!"
          </h1>
          <p className="text-white  text-xs text-center font-roboto xl:w-full md:w-[85%] w-[90%]">
            "Join our newsletter to stay updated on the latest school news,
            upcoming events, and special programs. Sign up today and never miss
            a moment!"
          </p>
          <div className=" flex justify-between   xl:max-w-[389px]  gap-6 xl:h-[36px]">
            <input
              placeholder="Email Address"
              className="bg-white h-full  xl:text-base text-xs rounded-xl border-none"
              type="email"
            />
            <Button
              label="Subscribe"
              className={"xl:text-base"}
              color={color}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsLetter;
