import { SiTesla } from "react-icons/si";
import { FaBagShopping } from "react-icons/fa6";
const Ratings = () => {
    const reviews = [
        {
            image: 'src/assets/p6.png',
            name: 'John Doe',
            text: 'I love this product!',
            desc: 'Our staff could not support our call volume. Spruce has given us the ability to communicate more efficiently with patients, even with a small staff and large call volume.',
            rating: 5,
            company: 'Hometown Health Center',
        },
        {
            image: 'src/assets/p4.png',
            name: 'Jane Smith',
            text: 'This product is amazing!',
            desc: 'Spruce provided us with a seamless solution for better communication with our patients. It made things much more efficient for us.',
            rating: 4,
            company: 'Sunrise Wellness',
        },
        {
            image: 'src/assets/p5.png',
            name: 'Bob Johnson',
            text: 'I\'m so happy with this product!',
            desc: 'With Spruce, patient satisfaction has improved drastically. It\'s an incredible tool for our communication needs.',
            rating: 5,
            company: 'Wellness Clinic Co.',
        },
        {
            image: 'src/assets/p3.png',
            name: 'Alice Thompson',
            text: 'Excellent product with great support!',
            desc: 'The team at Spruce has made sure our staff is well-trained and equipped to use their tools effectively. Couldn\'t be happier.',
            rating: 5,
            company: 'Care Plus Medical Center',
        }
    ];
    return (
        <>
            <div className=" w-[100%] py-10">

                <div className="flex gap-4 w-[100%] justify-center">
                    <div className=" flex gap-4 items-center">
                        <SiTesla className="h-8 w-8" />
                        <h1 className="text-2xl max-sm:text-lg text-gray-800 font-nunito font-bold text-center">HIPPA</h1>
                    </div>
                    <div className=" flex gap-4 items-center">
                        <FaBagShopping className="h-8 w-8" />
                        <div>
                            <h1 className="text-2xl  max-sm:text-lg text-gray-800 font-nunito font-bold text-center">SOC 2</h1>
                            <p className=" text-[10px] font-nunito font-semibold ">Type II Audited</p>
                        </div>
                    </div>
                </div>

                <div className="w-[100%] py-10">

                    <div className="container mx-auto p-4 pt-6">
                        <div className="flex flex-wrap gap-3 justify-center">
                            {reviews.map((review, index) => (
                                <div key={index} className="flex hover:scale-110 hover:shadow-xl transition-transform duration-300 ease-in-out  border-r border-l border-b shadow-lg shadow-neutral-300 flex-col p-5 mb-10  w-[21rem]">
                                    <div className="flex">
                                        {Array(review.rating)
                                            .fill(null)
                                            .map((_, index) => (
                                                <svg
                                                    key={index}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5 text-yellow-400"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                    </div>
                                    <p className="text-gray-800 mt-4 font-semibold">{review.text}</p>
                                    <p className="text-gray-800 mt-4 font-semibold min-h-[8rem] h-auto">{review.desc}</p>
                                    <div className=" flex items-center gap-2 mt-2">
                                        <img
                                            src={review.image}
                                            alt={review.name}
                                            className="w-20 h-20 rounded-full"
                                        />
                                        <div>
                                            <h2 className="text-lg font-bold ">{review.name}</h2>
                                            <h2 className="text-base font-medium ">{review.company}</h2>
                                        </div>
                                    </div>


                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Ratings