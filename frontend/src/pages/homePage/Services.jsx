import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import img_1 from '../../assets/services/1.png'
import img_2 from '../../assets/services/2.png'
import img_3 from '../../assets/services/3.png'
import img_4 from '../../assets/services/4.png'

const Services = () => {
   return (
      <div>

         <div className="flex items-center justify-between">
            <div className="space-y-3">
               <h2 className="text-4xl font-semibold">Our Services</h2>
               <p className="text-gray-600">The world's leading car brands</p>
            </div>
            <Link to='/' className="bg-black text-white flex items-center space-x-3 py-2 px-6 rounded-md">
               <span className="font-semibold">View More</span>
               <IoIosArrowRoundForward className="text-3xl" />
            </Link>
         </div>

         {/* our services */}

         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 my-20">
            <div className="relative group duration-300">
               <img src={img_1} alt="" className="w-full" />
               <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-purple-700/50 text-center flex items-center w-full h-full justify-center text-white font-semibold text-2xl font-serif opacity-0 group-hover:opacity-100 duration-300">
                  <h3>Airport</h3>
               </div>
            </div>
            <div className="relative group duration-300">
               <img src={img_2} alt="" className="w-full" />
               <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-purple-700/50 text-center flex items-center w-full h-full justify-center text-white font-semibold text-2xl font-serif opacity-0 group-hover:opacity-100 duration-300">
                  <h3>Chauffeur</h3>
               </div>
            </div>
            <div className="relative group duration-300">
               <img src={img_3} alt="" className="w-full" />
               <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-purple-700/50 text-center flex items-center w-full h-full justify-center text-white font-semibold text-2xl font-serif opacity-0 group-hover:opacity-100 duration-300">
                  <h3>Corporate</h3>
               </div>
            </div>
            <div className="relative group duration-300">
               <img src={img_4} alt="" className="w-full" />
               <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-purple-700/50 text-center flex items-center w-full h-full justify-center text-white font-semibold text-2xl font-serif opacity-0 group-hover:opacity-100 duration-300">
                  <h3>Rentals</h3>
               </div>
            </div>
         </div>

      </div>
   );
};

export default Services;