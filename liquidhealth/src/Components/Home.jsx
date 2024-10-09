// import { FaDotCircle } from "react-icons/fa";

import { useState } from "react";
import "./Home.css";
import { toast } from "react-toastify";

const Home = () => {
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const handleSubmit = () => {
    // e.preventDefault()
    console.log("button submit")
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    console.log(email, "email is here");
    toast.success("email submitted successfully");
    setEmail("");
  };
  return (
    <>
      {/* header section */}

      <div className="w-[100%] flex justify-between setscreen" id="home">
        {/* About section */}
        <div className="w-[60%] setscreenwidth mt-24 ml-20">
          <div
            className="w-[90%] xl:ml-10"
            style={{ fontFamily: "Eastman Grotesque, sans-serif" }}
          >
            <h1 className="text-5xl mx-auto leading-[1.4] font-sans font-bold">
              We help <span className="text-[#880adf]">doctors </span>forget
              about them darned{" "}
              <span className=" font-nunitoSans text-[#880adf]">
                insurance payers<span className="text-[#000000]">.</span>
              </span>
            </h1>
          </div>

          <div className=" w-[100%] xl:ml-10 mx-auto mt-7">
            <div className="w-[78%]">
              <p className="text-[25px] mx-auto  text-[#000000cd]">
                No more waiting 45+ days to be paid for patients you treat
                today. We pay you every single day into your account. <br /> We
                turn your patient care claim to cash in 24 hours.
              </p>
            </div>
          </div>

          <div className=" w-[100%] xl:ml-10 setwidth mx-auto mt-24">
            <div className="flex items-center border-collapse">
              <div
                className="flex w-full "
              >
                <button onClick={handleSubmit} className="bg-[#d9d9d9] border-r-0 border-[#a6a6a6] hover:bg-blue-500  border-collapse outline-none border-2 h-[3rem] w-28 ">
                  <p className="text-[#000000] font-semibold text-[25px] hover:text-white">
                    Email
                  </p>
                </button>
                <div className="border-2 border-collapse  border-[#a6a6a6] w-[70%]">
                  <input
                    type="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Sign up for an invite to the next cohort of practices"
                    className=" w-full h-[2.8rem] max-sm:text-[12px] xl:text-[24px] md:text-[14px] text-[#a6a6a6] outline-none px-8"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end w-[90%] xl:w-[83%]">
              <p className=" text-[#4e0d7dba] mr-1 text-[20px] ">
                no loans, financing or credit scores required
              </p>
            </div>
          </div>
        </div>

        {/* Mobile screen */}
        <div className="w-[40%] setscreenwidth abm mt-5 flex justify-end">
          <img
            className="h-[37.2rem]  min-h-full w-[30rem]"
            src="src/assets/Copy of liquidhealth (2).png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Home;
