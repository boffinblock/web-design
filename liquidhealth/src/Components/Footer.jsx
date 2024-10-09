
const Footer = () => {
    return (
        <>
            <div className="w-[100%] p-4 bg-[#000000] pb-11" id="contact"> 
                <div className="gap-10 max-sm:flex-col flex">

                    <div className="w-[25%]">
                        <div className=" h-20 w-[307px] relative ">
                            <div className="flex gap-1 items-center p-1">
                                <div className="outer-circle-footer mt-4 h-9 w-9">
                                    <div className="inner-circle-footer"></div>
                                </div>

                                <div className="flex mt-1">
                                    <p className=" text-white font-bold font-nunito text-3xl mt-[11px]"> liquid </p>
                                    <span className=" font-nunito mt-3 text-white text-3xl"> health </span>
                                </div>
                            </div>
                            <p className=" flex justify-end absolute text-[#777779] bottom-2 text-[10px] p-1 right-24">by Accelerated Payments</p>
                        </div>
                    </div>

                    <div className="w-[25%] max-sm:mx-auto mt-5">
                        <div className="">
                            <p className="text-gray-300 text-center whitespace-nowrap text-2xl" >Plan & Pricing</p>
                            <p className="text-gray-300 text-center whitespace-nowrap mt-4 text-2xl" >HIPPA & Security</p>
                            <p className="text-gray-300 text-center whitespace-nowrap mt-4 text-2xl" >Spruce apps</p>
                            <p className="text-gray-300 text-center whitespace-nowrap mt-4 text-2xl" >Help Center</p>
                            <p className="text-gray-300 text-center whitespace-nowrap mt-4 text-2xl" >Spruce Blog</p>
                        </div>

                    </div>
                    <div className="w-[25%] max-sm:mx-auto mt-5">
                        <div className="">
                            <p className="text-gray-300 text-center whitespace-nowrap text-2xl" >Primary Care</p>
                            <p className="text-gray-300 text-center whitespace-nowrap mt-4 text-2xl" >Mental Health</p>
                            <p className="text-gray-300 text-center whitespace-nowrap mt-4 text-2xl" >Other Specialist</p>
                            <p className="text-gray-300 text-center whitespace-nowrap mt-4 text-2xl" >Patients</p>
                            <p className="text-gray-300 text-center whitespace-nowrap mt-4 text-2xl" >View Demo</p>
                        </div>

                    </div>
                    <div className="w-[25%] max-sm:mx-auto mt-5">
                        <div className="">
                            <p className="text-gray-300 text-center whitespace-nowrap text-2xl" >About Us</p>
                            <p className="text-gray-300 text-center whitespace-nowrap mt-4 text-2xl" >Carrers</p>
                            <p className="text-gray-300 text-center whitespace-nowrap mt-4 text-2xl" >Terms of Use</p>
                            <p className="text-gray-300 text-center whitespace-nowrap mt-4 text-2xl" >Privacy Policy</p>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Footer