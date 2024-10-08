import { useState } from "react"

const Challanges = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        company:''
    })

    const handleChange  = (e) => {
        const {id, value} = e.target
        setFormData((prev) => ({
          ...prev , [id] : value
        }));
    }

    const  handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            name:'',
            email:'',
            company:''
        })
    }

    return (
        <>
            <div className="w-[100%] py-12 bg-[#efeefc]" id="solution">

                <h1 className="text-4xl max-sm:text-lg text-gray-900 font-nunito font-bold text-center">{"Let's Talk Your Challanges"}</h1>
                <div className=" flex justify-center w-[45%] mx-auto mt-8">
                    <h1 className="text-2xl max-sm:text-lg text-gray-800 font-nunito font-bold text-center">{"Conect with our team of expert to discuss the improtant implemention of digital front door solutions. let's find out together how to reduce your cost and improve your custmors' experience."}</h1>
                  
                </div>

                <div className="  justify-center w-[45%] mx-auto mt-8">
                        <label className="font-semibold text-lg text-blue-900" htmlFor=""> Full Name <span className="  font-bold text-red-900"> *</span></label>
                        <input value={formData.name} onChange={handleChange} type="text" name="name" id="name" placeholder="Enter your name" className="border-2 rounded-lg p-2 outline-none w-full h-12" /> 

                       <div className="mt-8">
                       <label className="font-semibold text-lg text-blue-900" htmlFor=""> Bussiness Email <span className="  font-bold text-red-900"> *</span></label>
                        <input value={formData.email} onChange={handleChange} type="email" name="email" id="email" placeholder=" Your email" className="border-2 rounded-lg p-2 outline-none w-full h-12" /> 
                       </div>

                       <div className="mt-8">
                       <label className="font-semibold text-lg text-blue-900" htmlFor=""> Company <span className="  font-bold text-red-900"> *</span></label>
                        <input value={formData.company} onChange={handleChange} type="text" name="company" id="company" placeholder=" Enter Your company" className="border-2 rounded-lg p-2 outline-none w-full h-12" /> 
                       </div>

                       <div className="mt-8">
                        <button onClick={handleSubmit} className=" w-full h-10 font-semibold bg-blue-800 text-white border rounded-lg">Submit</button>
                       </div>
                       

                    </div>

            </div>
        </>

    )
}

export default Challanges