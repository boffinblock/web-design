import { FaBuilding } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
const Header = () => {
  return (
    <>
             {/* logo/header */}
             <div className="w-[100%] fixed top-0 bg-white z-10">
                    <div className=" w-[85%] h-[7rem] mx-auto flex justify-between max-sm:gap-2 items-center">
                        <div className=" h-20 relative ">
                            <div className="flex gap-1 items-center p-1">
                                <div className="outer-circle mt-4 h-9 w-9">
                                    <div className="inner-circle"></div>
                                </div>

                                <div className="flex mt-1">
                                    <p className=" text-[#000000] font-bold font-nunito text-3xl mt-[11px]"> liquid </p>
                                    <span className=" font-nunito mt-3 text-[#000000] text-3xl"> health </span>
                                </div>
                            </div>
                            <p className=" flex justify-end absolute text-[#777779] bottom-2 text-[10px] p-1 right-0">by Accelerated Payments</p>
                        </div>
                        <div className="">
                            <ul className="flex gap-8 list1 tracking-[1px]">
                                <li className="text-[18px]">Company</li>
                                <li className="text-[18px]">Solution</li>
                                <li className="text-[18px]">Partners</li>
                                <li className="text-[18px]">Contact</li>
                            </ul>

                            <ul className="flex gap-8 list2">
                                <li className="text-[18px]"><FaBuilding /></li>
                                <li className="text-[18px]"><FaLightbulb /></li>
                                <li className="text-[18px]"><FaUserFriends /></li>
                                <li className="text-[18px]"><MdContactPhone /></li>
                            </ul>

                        </div>
                    </div>
                </div>

    </>
  )
}

export default Header