import React from "react";
import Btn from "../assets/Btn";

const Footer = () => {
  const NavMenu = [
    { name: "Home", path: "/" },
    { name: "Book Now", path: "/bookNow" },
    { name: "Our Events", path: "/events" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8 px-5">

      <div className="max-w-7xl pb-4 mx-auto grid gap-10 md:grid-cols-3 text-center md:text-left">
        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Evento</h2>
          <p className="text-gray-400 text-sm">
            Inspiring events, unforgettable experiences. Join our community and
            stay in the loop with the latest updates.
          </p>
        </div>

        {/* Quick Links */}
        <div className="">
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            {NavMenu.map((item, index) => (
              <li key={index} className="px-5">
                <a
                  href={item.path}
                  className={`relative text-white 
                  after:content-[''] after:absolute after:-bottom-1 after:left-0 
                  after:w-full after:h-[2px] after:bg-white 
                  after:scale-x-0 hover:after:scale-x-100 
                  after:origin-left after:transition-transform after:duration-300 opacity-70 hover:opacity-100
          
                  ${
                    location.pathname === item.path
                      ? "after:scale-x-80 opacity-100"
                      : "opacity-70"
                  }
                `}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col md:items-end md:text-right">
          <div>
            <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4 text-xl">
              <a href="#" className="hover:text-blue-500">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#" className="hover:text-sky-400">
                <i className="ri-twitter-x-line"></i>
              </a>
              <a href="#" className="hover:text-pink-500">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="#" className="hover:text-blue-600">
                <i className="ri-linkedin-fill"></i>
              </a>
            </div>
          </div>
          <div>
            {/* <div className="bg-zinc-600 rounded-[100px] w-[75%]  flex mt-2 ">
              <input
                type="email"
                className="text-white pl-10 outline-none font-semibold"
                placeholder="Enter your email"
              />
              <Btn content={"submit"} />
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-4 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <b>Evento.</b> All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
