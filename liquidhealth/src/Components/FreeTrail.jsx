
const FreeTrail = () => {
    return (
        <>
            <div className="w-[100%] bg-[#151b20]">
                <div className="w-[50%] mx-auto py-5">
                    <h1 className="text-6xl max-sm:text-lg text-white font-nunitoSans font-bold text-center">{"Join our 25,000 healthcare professionals today"}</h1>
                    <h1 className="text-[32px] mt-5 max-sm:text-lg text-white font-nunito  font-semibold text-center">{"Get started with unlimited 14 days trail"}</h1>
                    <div className="flex justify-center gap-7 mt-8">

                        <button className=" w-52 p-2 items-center hover:bg-gray-900 hover:border-white hover:border-2 bg-blue-800 font-nunito font-semibold text-white h-12 rounded-xl max-sm:text-[12px]">Get Started for Free</button>
                        <button className=" items-center w-52 p-2 hover:bg-blue-800 border-white border-2 font-nunito font-semibold text-white h-12 rounded-xl max-sm:text-[12px]">See a Demo</button>


                    </div>
                </div>
            </div>
        </>
    )
}

export default FreeTrail