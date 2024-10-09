import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Challanges = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const validateEmail = (email) => {
    // Basic email regex for validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) {
      toast.error("Please fill out all fields.");
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.warning("Please enter a valid email address.");
      return;
    }

    console.log(formData);
    setFormData({
      name: "",
      email: "",
      company: "",
    });
    toast.success("formData submited successfully")
  };

  return (
    <>
      <div className="w-[100%] py-12 bg-[#efeefc]" id="solution">
        <h1 className="text-4xl max-sm:text-lg text-gray-900 font-nunito font-bold text-center">
          {"Let's Talk Your Challanges"}
        </h1>
        <div className=" flex justify-center w-[45%] mx-auto mt-8">
          <h1 className="text-2xl max-sm:text-lg text-gray-800 font-nunito font-bold text-center">
            {
              "Conect with our team of expert to discuss the improtant implemention of digital front door solutions. let's find out together how to reduce your cost and improve your custmors' experience."
            }
          </h1>
        </div>

        <div className="  justify-center w-[45%] mx-auto mt-8">
          <label className="font-semibold text-lg text-blue-900" htmlFor="">
            {" "}
            Full Name <span className="  font-bold text-red-900"> *</span>
          </label>
          <input
            value={formData.name}
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            required
            className="border-2 rounded-lg p-2 focus:outline-none w-full h-12"
          />

          <div className="mt-8">
            <label className="font-semibold text-lg text-blue-900" htmlFor="">
              {" "}
              Bussiness Email{" "}
              <span className="  font-bold text-red-900"> *</span>
            </label>
            <input
              value={formData.email}
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              placeholder=" Your email"
              required
              className="border-2 rounded-lg p-2 focus:outline-none w-full h-12"
            />
          </div>

          <div className="mt-8">
            <label className="font-semibold text-lg text-blue-900" htmlFor="">
              {" "}
              Company <span className="  font-bold text-red-900"> *</span>
            </label>
            <input
              value={formData.company}
              onChange={handleChange}
              type="text"
              name="company"
              id="company"
              required
              placeholder=" Enter Your company"
              className="border-2 rounded-lg p-2 focus:outline-none w-full h-12"
            />
          </div>

          <div className="mt-8">
            <button
              onClick={handleSubmit}
              className=" w-full h-10 font-semibold bg-blue-800 text-white hover:bg-gray-300 hover:text-blue-900 border rounded-lg"
            >
              Submit
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Challanges;
