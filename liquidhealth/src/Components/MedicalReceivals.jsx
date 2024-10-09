import { TbDeviceMobileDollar } from "react-icons/tb";
import { TfiWallet } from "react-icons/tfi";
import { FaHandHoldingUsd } from "react-icons/fa";
const MedicalReceivals = () => {

    return (
        <>
    <div className=" w-full bg-[#f8f8fa] pb-12 pt-4">
                {/* medical receivals and finacing */}
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-6xl font-medium font-hind text-blue-800 mt-6">
                        Medical Receivables Financing

                    </h2>
                    <p className="mt-14 text-blue-800 font-noto text-2xl">
                        Bridge Your Cash Flow Gap
                    </p>

                    <div className="w-[80%] mx-auto mt-10 flex justify-between ">

                        <div className=" w-[30%] h-[13rem] rounded-lg bg-white hover:scale-110 hover:shadow-xl transition-transform duration-300 ease-in-out">
                            <div className="pt-10">
                                <div className=" flex justify-center">
                                    <TfiWallet className=" h-16 w-16 text-sky-400" />
                                </div>
                                <h1 className=" text-blue-800 mt-3 font-nunito font-bold text-2xl">Managing Cash Flow</h1>
                            </div>
                        </div>

                        <div className=" w-[30%] h-[13rem] rounded-lg bg-white hover:scale-110 hover:shadow-xl transition-transform duration-300 ease-in-out">
                            <div className="pt-10">
                                <div className=" flex justify-center">
                                    <FaHandHoldingUsd className=" h-16 w-16 text-sky-400" />
                                </div>
                                <h1 className=" text-blue-800 mt-3 font-nunito font-bold text-2xl">Grow Your Bussiness</h1>
                            </div>
                        </div>

                        <div className=" w-[30%] h-[13rem] rounded-lg bg-white hover:scale-110 hover:shadow-xl transition-transform duration-300 ease-in-out">
                            <div className="pt-10">
                                <div className=" flex justify-center">
                                    <TbDeviceMobileDollar className=" h-16 w-16 text-sky-400" />
                                </div>
                                <h1 className=" text-blue-800 mt-3 font-nunito font-bold text-2xl">Making Payroll</h1>
                            </div>
                        </div>

                    </div>
                    <p className="mt-14 text-blue-800 font-bold font-nunito text-lg">
                        Get an asset based factoring facility staring at $100,000
                    </p>
                    <button className="mt-10 w-[9rem] hover:bg-gray-900 rounded-lg border-2 bg-blue-900 h-10">
                        <p className="text-white   font-nunito">LEARN MORE</p>

                    </button>

                </div>
            </div>
        </>
    )
}

export default MedicalReceivals