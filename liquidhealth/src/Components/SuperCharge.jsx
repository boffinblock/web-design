import { MdOutlineTimer } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
import { LuInfinity } from "react-icons/lu";
const SuperCharge = () => {
    return (
        <>
            <div className="w-full bg-[#f0f4f9] pt-4 pb-8 md:pt-8 lg:pt-12">

                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-5xl font-nunito font-bold text-gray-800 md:text-6xl lg:text-7xl">
                        SuperCharge Your Growth Today
                    </h2>
                    <div className="w-[100%] mt-12 flex justify-between mx-auto flex-wrap md:flex-nowrap">

                        <div className="w-full md:w-[33%] xl:w-[30%]">
                            <div className="mx-auto">
                                <div className="flex justify-center">
                                    <MdOutlineTimer className="text-violet-500 h-16 w-16" />
                                </div>
                                <h1 className="font-semibold mt-2 font-nunito">
                                    Apply in just <br />
                                    <span className="text-3xl font-semibold font-nunito leading-[3.5rem]">5 Minutes</span>
                                </h1>
                            </div>
                        </div>

                        <div className="w-full md:w-[33%] xl:w-[35%] mx-auto ml-">

                            <p className="text-gray-800 font-nunito font-semibold text-3xl">
                                Apply if you qualify
                            </p>
                            <div className="xl:ml-32 md:ml-0">
                                <div className="flex items-center gap-2 mt-8">
                                    <MdOutlineDone className="bg-violet-500 rounded-full h-4 w-4 text-white" />
                                    <h1 className="text-gray-500">12 + Month in bussiness</h1>
                                </div>
                                <div className="flex items-center gap-2 mt-3">
                                    <MdOutlineDone className="bg-violet-500 rounded-full h-4 w-4 text-white" />
                                    <h1 className="text-gray-500">$30 k + Montly revenue</h1>
                                </div>
                                <div className="flex items-center gap-2 mt-3">
                                    <MdOutlineDone className="bg-violet-500 rounded-full h-4 w-4 text-white" />
                                    <h1 className="text-gray-500">Bussiness register in ireland</h1>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-[33%] xl:w-[35%]">
                            <div className="mx-auto">
                                <div className="flex justify-center">
                                    <LuInfinity className="text-violet-500 h-16 border-dotted border-black w-16" />
                                </div>
                                <h1 className="font-semibold font-nunito">
                                    Additonal top-ups <br />
                                    <span className="text-3xl font-semibold font-nunito leading-[3rem]">Continuses</span>
                                </h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SuperCharge