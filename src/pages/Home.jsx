import React from "react";
import NavBar from "../Components/NavBar";
import Card from "../Components/Card";
import Btn from "../assets/Btn";
import Upcoming from "../Components/Upcoming";
import { useDispatch } from "react-redux";
import { persistor } from "../store/Store";
import { logout } from "../store/reducers/eventSlice";

function Home() {
  const dispatch = useDispatch();
  // // const handleLogout = () => {
  // dispatch(logout());
  // persistor.purge();
  // // };
  return (
    <>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-18px); }
          }

          .float-animation {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>
      <div>
        <div className="md:h-[80vh] h-[70vh] lg:h-[90vh] flex flex-col-reverse  sm:flex-row items-center justify-center text-black ">
          <div className="sm:w-[80%] lg:w-[40%]">
          <h1 className='font-bold text-5xl leading-10 sm:text-7xl sm:leading-15 text-[#123574] font-[gilroy]'>Book Your <span className="text-white text-stroke">Next Event</span> in Seconds</h1>
          <p className='mt-5 text-xl text-black'>Discover and reserve top events effortlessly. Secure your spot with just a few clicks—fast, easy, and reliable booking.</p>
            <Btn className={"mt-5"} content={"Book Now"} link={"/bookNow"} />
          </div>
          <div className="w-1/2 lg:w-[40%]">
            <div className="img flex justify-center items-start">
              <img className="object-cover float-animation " src="/herobg.png" alt="" />
            </div>
          </div>
        </div>
        {/* why us */}
        <div>
          <h1 className="common-heading">Why Chose Us</h1>
          <Card />
        </div>
        {/* Upcumming events */}
        <div>
          <h1 className="common-heading">UpComming Eveents</h1>
          <Upcoming />
        </div>
      </div>
    </>
  );
}

export default Home;
