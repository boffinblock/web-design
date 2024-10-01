// import { FaDotCircle } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import "./Home.css"
const Home = () => {
    return (
        <>

            {/* main div */}
            <div className="w-[100%]">

                {/* logo/header */}
             <div className="w-[100%]">
             <div className="mt-10 w-[85%] mx-auto flex justify-between max-sm:gap-2 items-center">
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

                {/* header section */}

                <div className="w-[100%] flex justify-between setscreen">

                    {/* About section */}
                    <div className="w-[60%] setscreenwidth mt-24 ml-20">

                        <div className="w-[90%] xl:ml-10" style={{ fontFamily: 'Eastman Grotesque, sans-serif' }}>
                            <h1 className="text-5xl mx-auto leading-[1.4] font-sans font-bold">We help <span className="text-[#880adf]">doctors </span>forget about them darned <span className=" font-nunitoSans text-[#880adf]">insurance payers<span className="text-[#000000]">.</span></span></h1>
                        </div>

                        <div className=" w-[100%] xl:ml-10 mx-auto mt-7">
                            <div className="w-[78%]">
                                <p className="text-[25px] mx-auto  text-[#000000cd]">No more waiting 45+ days to be paid for patients you treat today. We pay you every single day into your account. <br /> We turn your patient care claim to cash in 24 hours.</p>
                            </div>
                        </div>

                        <div className=" w-[100%] xl:ml-10 setwidth mx-auto mt-24">
                            <div className="flex items-center border-collapse">
                                <button className="bg-[#d9d9d9] border-r-0 border-[#a6a6a6] border-collapse outline-none border-2 h-[3rem] w-28 ">
                                    <p className="text-[#000000] font-semibold text-[25px]">Email</p>
                                </button>
                                <div className="border-2 border-collapse  border-[#a6a6a6] w-[70%]">
                                    <input type="email" placeholder="Sign up for an invite to the next cohort of practices" className=" w-full h-[2.8rem] max-sm:text-[12px] xl:text-[24px] md:text-[14px] text-[#a6a6a6] outline-none px-8" />


                                </div>

                            </div>
                            <div className="flex justify-end w-[90%] xl:w-[83%]">
                                <p className=" text-[#4e0d7dba] mr-1 text-[20px] ">no loans, financing or credit scores required</p>
                            </div>

                        </div>

                    </div>

                    {/* Mobile screen */}
                    <div className="w-[40%] setscreenwidth abm mt-5 flex justify-end">

                        <img className="h-[37.2rem]  min-h-full w-[30rem]" src="src/assets/Copy of liquidhealth (2).png" alt="" />

                    </div>

                </div>

            

            </div>

        </>
    )
}

export default Home