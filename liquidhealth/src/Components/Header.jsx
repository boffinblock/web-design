import { FaBuilding } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { Link } from "react-scroll";
const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      {/* logo/header */}
      <div className="w-[100%] fixed top-0 bg-white z-10">
        <div className=" w-[85%] h-[7rem] mx-auto flex justify-between max-sm:gap-2 items-center">
          <a href="#" onClick={scrollToTop} className=" h-20 relative ">
            <div className="flex gap-1 items-center p-1">
              <div className="outer-circle mt-4 h-9 w-9">
                <div className="inner-circle"></div>
              </div>

              <div className="flex mt-1">
                <p className=" text-[#000000] font-bold font-nunito text-3xl mt-[11px] cursor-pointer">
                  {" "}
                  liquid{" "}
                </p>
                <span className=" font-nunito mt-3 text-[#000000] text-3xl">
                  {" "}
                  health{" "}
                </span>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  activeClass="active-class" 
                  className="link-class"
                  exact="true"
                ></Link>
              </div>
            </div>
            <p className=" flex justify-end absolute text-[#777779] bottom-2 text-[10px] p-1 right-0">
              by Accelerated Payments
            </p>
          </a>
          <div className="">
            <ul className="flex gap-8 list1 tracking-[1px]">
              <li className="text-[18px] hover:text-blue-700 cursor-pointer  p-1 rounded-xl">
                <Link
                  to="company"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                   activeClass="active-class" 
                  className="link-class"
                  exact="true"
                >
                  Company
                </Link>
              </li>
              <li className="text-[18px] hover:text-blue-700 cursor-pointer  p-1 rounded-xl">
                <Link
                  to="solution"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                   activeClass="active-class" 
                  className="link-class"
                  exact="true"
                >
                  Solution
                </Link>
              </li>
              <li className="text-[18px] hover:text-blue-700 cursor-pointer  p-1 rounded-xl">
                <Link
                  to="partner"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                   activeClass="active-class" 
                  className="link-class"
                  exact="true"
                >
                  Partner
                </Link>
              </li>
              <li className="text-[18px] hover:text-blue-700 cursor-pointer  p-1 rounded-xl">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                   activeClass="active-class" 
                  className="link-class"
                  exact="true"
                >
                  Contact
                </Link>
              </li>
            </ul>

            <ul className="flex gap-8 list2">
              <li className="text-[18px]">
                <Link
                  to="company"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                   activeClass="active-class" 
                  className="link-class"
                 exact="true"
                >
                  <FaBuilding />
                </Link>
              </li>
              <li className="text-[18px]">
                <Link
                  to="solution"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                   activeClass="active-class" 
                  className="link-class"
                  exact="true"
                >
                  <FaLightbulb />
                </Link>
              </li>
              <li className="text-[18px]">
                <Link
                  to="partner"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  activeClass="active-class" 
                  className="link-class"
                  exact="true"
                >
                  <FaUserFriends />
                </Link>
              </li>
              <li className="text-[18px]">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                   activeClass="active-class" 
                  className="link-class"
                 exact="true"
                >
                  <MdContactPhone />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
