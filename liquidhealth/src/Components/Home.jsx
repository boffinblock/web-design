// import { FaDotCircle } from "react-icons/fa";
import "./Home.css"
const Home = () => {
    return (
        <>
            <div className="w-[100%]">

                <div className="mt-10 ml-[160px] justify-start w-[77%] mx-auto flex">
                    <div className=" h-20 relative ">


                    <div className="flex gap-1 items-center p-1">
                            <div className="outer-circle mt-3 h-12 w-12">
                                <div className="inner-circle"></div>
                            </div>

                          <div className="flex mt-1">
                          <p className=" text-[#42284B] font-extrabold text-4xl mt-2"> liquid </p>
                          <span className="font-extralight mt-1 text-[#906897] text-[33px]"> health </span>
                          </div>
                        </div> 



                        {/* <div className="flex gap-1 items-center p-1">
                            <div className="outer-circle mt-3 h-12 w-12">
                                <div className="inner-circle"></div>
                            </div>

                           <p className=" text-[#5f3573] font-bold text-4xl mt-2"> liquid </p>
                           <span className="font-extralight mt-2 text-[33px]"> health </span>
                        </div> */}
                        <p className=" flex justify-end absolute text-[#777779] bottom-2 text-[10px] p-1 font-bold right-0">by Accelerated Paymets</p>
                    </div>
                </div>

                <div className="w-[100%] flex justify-between">
                    <div className="w-[60%] mt-20 ml-16">

                        <div className="w-[77%] mx-auto">
                            <h1 className="text-5xl mx-auto font-bold">We help <span className="text-[#41ADA1]">doctors </span>forget about them darned <span className="text-[#41ADA1]">insurance payers.</span></h1>
                        </div>

                        <div className=" w-[77%] mx-auto mt-7">
                            <div className="w-[78%]">
                            <p className="text-[30px] mx-auto text-[#3D3B3C] font-bold">No more waiting 45+ days to be paid for patients to treat today. We pay you every single day into your account.</p>
                            </div>
                        </div>

                        <div className=" w-[77%] mx-auto mt-12">
                            <div className="flex items-center">
                                <button className="bg-[#41ADA1] border-2 h-10 w-36 ">
                                    <p className="text-white text-xl">Email</p>
                                </button>
                                <div className="border-2 border-gray-200 w-[70%]">
                                    <input type="email" placeholder="We first to know when the liquid divison offically insurance" className=" w-full h-10 outline-none p-2 " />
                                    

                                </div>
                                
                            </div>
                            <div className="flex justify-end mr-16">
                                <a href="#" className="underline text-[#A2A2A2]">learn more about the content company accpected guidelines</a>
                            </div>
                           
                        </div>

                    </div>
                    <div className="w-[40%] flex justify-end">

                        <img className="h-[38.5rem] w-[25rem]" src="src/assets/mobile.jpg" alt="" />

                    </div>

                </div>

            </div>

        </>
    )
}

export default Home