import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import Card from "../../components/Card";
import { useQuery } from '@tanstack/react-query'
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Cars = () => {

   const axiosPublic = useAxiosPublic();

   const { data: cars = [] } = useQuery({
      queryKey: ['cars'],
      queryFn: async () => {
         const { data } = await axiosPublic.get('/existingCar')
         return data;
      }
   })

   console.log(cars);
   return (
      <div className="py-20">
         <div className="flex items-center justify-between">
            <div className="space-y-3">
               <h2 className="text-4xl font-semibold">Recent Launched Cars</h2>
               <p className="text-gray-600">The world's leading car brands</p>
            </div>
            <Link to='/cars' className="bg-black text-white flex items-center space-x-3 py-2 px-6 rounded-md">
               <span className="font-semibold">View More</span>
               <IoIosArrowRoundForward className="text-3xl" />
            </Link>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
            {
               cars.map((car, i) => <Card key={i} car={car} />)
            }

         </div>

      </div>
   );
};

export default Cars;