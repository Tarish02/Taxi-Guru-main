import { useState } from "react";
import logo from "/images/common/logo2.png";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { styles } from "../../Style";
import { IoIosArrowDown } from "react-icons/io";
function NavBar() {
  const [toggle, setToggle] = useState(false);
  const [showService, setshowService] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <nav
        className={`${styles.paddingX} w-full text-white bg-black flex top-0 `}
      >
        <div className="w-full flex justify-between items-center mx-auto">
          <div className="w-[80px] h-[75px] lg:w-[130px] lg:h-[100px]">
            <NavLink to="/">
              <img src={logo} alt="Logo" className="w-[100%] h-[100%]" />
            </NavLink>
          </div>

          <div className="">
            <ul className="hidden lg:flex flex-row gap-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-2  text-[20px]  hover:bg-primary rounded-full ${
                    isActive ? "bg-primary" : ""
                  }`
                }
              >
                HOME
              </NavLink>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `px-4 py-2  text-[20px]  hover:bg-primary rounded-full ${
                    isActive ? "bg-primary" : ""
                  }`
                }
              >
                ABOUT US
              </NavLink>
              <NavLink
                onMouseEnter={() => setshowService(true)}
                onMouseLeave={() => setshowService(false)}
                to="/services"
                className={({ isActive }) =>
                  `px-4 py-2  text-[20px]  hover:bg-primary rounded-full relative flex items-center gap-1${
                    isActive ? "bg-primary" : ""
                  }`
                }
              >
                SERVICES
                <IoIosArrowDown />
                {showService && (
                  <li
                    onMouseEnter={() => setshowService(true)}
                    onMouseLeave={() => setshowService(false)}
                    className="cursor-pointer absolute top-10 -left-4 bg-white text-black  text-center "
                  >
                    <div className="block  px-2 py-2  duration-300 hover:bg-black hover:text-white">
                      <NavLink to="services/chandigarh-to-delhi">
                        CHANDIGARH TO DELHI TAXI
                      </NavLink>
                    </div>
                    <div className="block  px-2 py-2  duration-300 hover:bg-black hover:text-white">
                      <NavLink to="services/chandigarh-to-haryana">
                        CHANDIGARH TO HARYANA TAXI
                      </NavLink>
                    </div>
                    <div className="block  px-2 py-2  duration-300 hover:bg-black hover:text-white">
                      <NavLink to="services/chandigarh-to-punjab">
                        CHANDIGARH TO PUNJAB TAXI
                      </NavLink>
                    </div>
                    <div className="block  px-2 py-2  duration-300 hover:bg-black hover:text-white">
                      <NavLink to="services/chandigarh-to-himachal">
                        CHANDIGARH TO HIMACHAL TAXI
                      </NavLink>
                    </div>
                  </li>
                )}
              </NavLink>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `px-4 py-2  text-[20px]  hover:bg-primary rounded-full ${
                    isActive ? "bg-primary" : ""
                  }`
                }
              >
                CONTACT US
              </NavLink>
            </ul>
          </div>
        </div>
        

        {/* Toggle button */}

        <button
          className="lg:hidden flex items-center px-3 py-2 text-white"
          onClick={handleToggle}
        >
          {toggle ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </nav>

      {/* Responsive */}
      {toggle && (
        <div className="lg:hidden bg-black text-white">
          <ul className="flex flex-col items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `my-6 px-8 py-1 text-2xl  hover:bg-primary rounded-full ${
                  isActive ? "bg-primary" : ""
                }`
              }
              onClick={handleToggle}
            >
              HOME
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `my-6 px-8 py-1 text-2xl  hover:bg-primary rounded-full ${
                  isActive ? "bg-primary" : ""
                }`
              }
              onClick={handleToggle}
            >
              ABOUT US
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `my-6 px-8 py-1 text-2xl  hover:bg-primary rounded-full ${
                  isActive ? "bg-primary" : ""
                }`
              }
              onClick={handleToggle}
            >
              SERVICES
            </NavLink>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                `my-6 px-8 py-1 text-2xl  hover:bg-primary rounded-full ${
                  isActive ? "bg-primary" : ""
                }`
              }
              onClick={handleToggle}
            >
              CONTACT US
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;
