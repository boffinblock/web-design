import { MdOutlineDone } from "react-icons/md";

const AccelertedPayments = () => {
    return (
        <>
            <div className=" w-full ">
                <div className="w-[100%] pb-10 border-b shadow-md max-sm:w-full max-sm:flex-col flex justify-between p-5 mt-10 ">

                    <div className="w-[50%] max-sm:w-full mx-auto">

                        <img src="src/assets/Copy of liquidhealth (4).png" alt="" />

                    </div>
                    <div className="w-[50%] max-sm:w-full mx-auto mt-10">

                        <h1 className="font-medium font-work text-[44px] ">Owned & Operate by an award winning global winning company </h1>
                        <span className=" font-medium font-work text-[44px] ">-Accelerated Payments</span> 

                   <div className=" ml-6 mt-14">
                   <div className=" flex items-center gap-4  mt-8 ">
                            <MdOutlineDone className=" bg-violet-700 rounded-full h-10 w-10 text-white" />
                            <h1 className="text-gray-800 text-5xl">$2 billion +</h1>
                        </div>
                        
                        <div className=" flex items-center gap-4  mt-8 ">
                            <MdOutlineDone className=" bg-violet-700 rounded-full h-10 w-10 text-white" />
                            <h1 className="text-gray-800 text-5xl">45 + Countries</h1>
                        </div>
                   </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default AccelertedPayments