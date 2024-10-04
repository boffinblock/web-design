
const Challanges = () => {
    return (
        <>
            <div className="w-[100%] py-12 bg-[#efeefc]">

                <h1 className="text-4xl max-sm:text-lg text-gray-900 font-nunito font-bold text-center">{"Let's Talk Your Challanges"}</h1>
                <div className=" flex justify-center w-[45%] mx-auto mt-8">
                    <h1 className="text-2xl max-sm:text-lg text-gray-800 font-nunito font-bold text-center">{"Conect with our team of expert to discuss the improtant implemention of digital front door solutions. let's find out together how to reduce your cost and improve your custmors' experience."}</h1>
                  
                </div>

                <div className="  justify-center w-[45%] mx-auto mt-8">
                        <label className="font-semibold text-lg text-blue-900" htmlFor=""> Full Name <span className="  font-bold text-red-900"> *</span></label>
                        <input type="text" name="name" id="" placeholder="Enter your name" className="border-2 rounded-lg p-2 outline-none w-full h-12" /> 

                       <div className="mt-8">
                       <label className="font-semibold text-lg text-blue-900" htmlFor=""> Bussiness Email <span className="  font-bold text-red-900"> *</span></label>
                        <input type="email" name="email" id="" placeholder=" Your email" className="border-2 rounded-lg p-2 outline-none w-full h-12" /> 
                       </div>

                       <div className="mt-8">
                       <label className="font-semibold text-lg text-blue-900" htmlFor=""> Company <span className="  font-bold text-red-900"> *</span></label>
                        <input type="text" name="company" id="" placeholder=" Enter Your company" className="border-2 rounded-lg p-2 outline-none w-full h-12" /> 
                       </div>
                       

                    </div>

            </div>
        </>

    )
}

export default Challanges