import { FaArrowRightLong } from "react-icons/fa6";
const AppMarketPlace = () => {
  return (
    <>
      <div className="w-[90%] relative mt-10  mx-auto max-sm:flex-col flex justify-between pb-10">
        <div className="  w-[50%]  h-[92%] max-sm:w-full bg-[#f7f8f9] rounded-tl-xl rounded-bl-xl  shadow-md pt-16 pb-10">
          <div className="w-[70%] mx-auto">
            <h1 className="text-3xl font-nunito font-semibold text-[#4f0d7d]">
              API for Developers
            </h1>

            <h1 className="text-2xl font-nunito mt-2 font-semibold text-[#6848e7]">
              APP MARKETPLACE
            </h1>
            <p className="text-3xl font-work font-medium text-gray-800 mt-8">
              Integrate the tools you already use. we integrate with your
              existing software{" "}
            </p>

            <p className="text-xl font-nunito text-gray-800">
              It is easy to integrate Healthie into apps you already use like
              Google fit, Apple health, Fitbit{" "}
            </p>

            <button className="border-blue-700 hover:bg-gray-900 flex gap-2 items-center p-4 w-36 mt-8 bg-blue-800 font-nunito font-semibold text-white h-10 rounded-full">
              <p>View Apps</p> <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div className="w-[50%] h-[92%] absolute right-4 top-0 bg-[#dce5f0] rounded-tr-3xl rounded-br-3xl rounded-bl-3xl rounded-tl-3xl flex justify-center max-sm:w-full">
          <div className="flex max-sm:py-16 py-40 gap-6 px-10 max-lg:flex-col">
            <div className="bg-white border-2  rounded-2xl p-14 ">
              <img
                className="w-16 h-12"
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
            <div className="bg-white border-2  rounded-2xl p-2  flex items-center">
              <img className="" src="/src/assets/practicefussion.png" alt="" />
            </div>

            <div className="bg-white border-2  rounded-2xl flex items-center p-8 ">
              <img
                className=""
                src="/src/assets/Copy of liquidhealth (7).png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppMarketPlace;
