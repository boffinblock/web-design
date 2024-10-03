import { MdOutlineDone } from "react-icons/md";

const AccelertedPayments = () => {
    return (
        <>
            <div className=" w-full ">
                <div className="w-[85%] sm:flex-row flex justify-between mx-auto mt-10 pb-10 ">

                    <div className="w-[50%]">

                        <img src="src/assets/Copy of liquidhealth (4).png" alt="" />

                    </div>
                    <div className="w-[50%] mt-10">

                        <h1 className="font-nunito font-bold text-5xl ">Owned & Operate by an award winning global winning company <span>-Accelerated Payments</span> </h1>

                   <div className=" ml-6 mt-14">
                   <div className=" flex items-center gap-2  mt-8 ">
                            <MdOutlineDone className=" bg-violet-700 rounded-full h-10 w-10 text-white" />
                            <h1 className="text-gray-800 text-5xl">$2 billon +</h1>
                        </div>
                        
                        <div className=" flex items-center gap-2  mt-8 ">
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