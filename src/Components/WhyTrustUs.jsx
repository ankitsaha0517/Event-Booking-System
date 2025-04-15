import React from "react";
import Btn from "../assets/Btn";
// import { FaDollarSign, FaUsers, FaBriefcase, FaAward } from 'react-icons/fa';

const WhyTrustUs = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10  h-full">
      {/* Image with overlay */}
      <div className="rounded-xl overflow-hidden md:w-[70%] lg:w-[50%]">
        <img
          src="https://plus.unsplash.com/premium_photo-1677529496297-fd0174d65941?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Team"
          className="w-full rounded-xl object-cover"
        />
      </div>

      <div className="items-start md:w-[70%] lg:w-[50%] flex flex-col  md:items-center lg:items-start  md:justify-start">
        <div>
          <p className="text-black font-medium mb-2">Why Choose Us</p>
          <h2 className="text-4xl text-black md:text-5xl lg:text-4xl font-bold mb-6 sm:leading-10 lg:leading-8">
            Why Trust Us for Your IT Needs?
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-6 text-sm">
          <div className="flex items-center space-x-3 gap-2">
            {/* <FaDollarSign className="text-blue-400 text-4xl" /> */}
            <div>
              <h4 className="font-semibold text-md sm:text-xl lg:text-xl text-zinc-800">
                Affordable Price
              </h4>
              <p className="text-gray-900">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 gap-2 text-right">
            {/* <FaUsers className="text-blue-400 text-4xl" /> */}
            <div>
              <h4 className="font-semibold  text-md sm:text-xl lg:text-xl text-zinc-800">
                Professional Team
              </h4>
              <p className="text-gray-900">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 gap-2">
            {/* <FaBriefcase className="text-blue-400 text-4xl" /> */}
            <div>
              <h4 className="font-semibold text-md sm:text-xl lg:text-xl text-zinc-800">
                18+ Years Experience
              </h4>
              <p className="text-gray-900">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 gap-2 text-right">
            {/* <FaAward className="text-blue-400 text-4xl" /> */}
            <div>
              <h4 className="font-semibold  text-md sm:text-xl lg:text-xl text-zinc-800">
                Award Winning
              </h4>
              <p className="text-gray-900">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
        </div>

        <Btn className={"mt-5"} content={"Book Now"} />
      </div>
    </div>
  );
};

export default WhyTrustUs;
