import { useState } from "react"

const GetInTouch = () => {
  const [fromData, setFormData] = useState(
  {  name:'',
    surname:'',
    email:'',
    phone:'',
    message:''}
  )

  const handleChange = (e) => {
    const {id, value} = e.target
    setFormData((prev) => ({
      ...prev , [id] : value
    }));
  };

  const handleSubmit =  (e) => {
    e.preventDefault()
    console.log(fromData, 'form submitted successfully');
    setFormData({
      name:'',
      surname:'',
      email:'',
      phone:'',
      message:''
    })
  }

  return (
   <>
    <div className="flex items-center justify-center">
        <div className="w-[100%] max-sm:flex-col flex justify-between">

       
      <div className="max-w-lg w-[50%] max-sm:w-full mx-auto p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-blue-700 flex justify-center mb-4">Get in Touch Now</h1>
        <form >
       <div className=" flex gap-4">
       <div className="form-group mb-4">
           
            <input
              className="appearance-none block w-full bg-gray-100  rounded py-3 px-4 leading-tight focus:outline-none "
              id="name"
              type="text"
              placeholder="Name"
              value={fromData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-4">
       
            <input
              className="appearance-none block w-full bg-gray-100 rounded py-3 px-4 leading-tight focus:outline-none "
              id="surname"
              type="text"
              placeholder="Surname"
              value={fromData.surname}
              onChange={handleChange}
            />
          </div>
       </div>
          <div className="form-group mb-4">
           
            <input
              className="appearance-none block w-full bg-gray-100  rounded py-3 px-4 leading-tight focus:outline-none "
              id="email"
              type="email"
              placeholder="Email"
              value={fromData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-4">
          
            <input
              className="appearance-none block w-full bg-gray-100  rounded py-3 px-4 leading-tight  focus:outline-none"
              id="phone"
              type="tel"
              placeholder="Phone"
              value={fromData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-4">
           
            <textarea
              className="appearance-none block w-full bg-gray-100  rounded py-3 px-4 leading-tight focus:outline-none "
              id="message"
              rows="5"
              placeholder="Lets us know more...."
              value={fromData.message}
              onChange={handleChange}
            />
          </div>
          <button
            className="  text-blue-700 border-blue-600 border-2  w-full font-bold py-2 px-4 rounded focus:outline-none "
            type="submit"
            onClick={handleSubmit}
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="w-[50%]   max-sm:w-full">
        <div className="w-[60%] mx-auto">
            <h1 className="text-5xl font-nunito font-semibold text-gray-800">Regain control of your cash flow</h1>
            
            <p className="text-xl font-nunito text-gray-800 mt-5">Take control of your medical billing process with klaim inovative solutions.</p>
            <p className="text-xl font-nunito text-gray-800 mt-8">Wheather you are a large healthcare chain or a family-owned private practice, our solutions help streamline , your cash flow, mitigate payer payment delays,and drive hyper focus on quality of patient care. </p>

            <p className="text-xl font-nunito text-gray-800 mt-5">Join us and take control of your healthcare billing process today!</p>
        </div>
      </div>
      </div>
    </div>

   </>
  )
}

export default GetInTouch