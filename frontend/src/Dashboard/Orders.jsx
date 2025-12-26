import { PiEmptyThin } from "react-icons/pi";
import useAxiosPublic from "../hooks/useAxiosPublic";
import DashboardTitle from "../Shared/DashboardTitle";
import { useQuery } from '@tanstack/react-query'
import { Link } from "react-router-dom";
import toast from "react-hot-toast";


const Orders = () => {
   const axiosPublic = useAxiosPublic();
   const { data: orders = [], refetch } = useQuery({
      queryKey : ['orders'],
      queryFn : async() =>{
         const res = await axiosPublic.get('/orders')
         return res.data;
      }
   })

   const handleDelete = async id =>{
      const res = await axiosPublic.delete(`/booking/${id}`)
      if(res.data.deletedCount > 0){
         toast.success('Item has been deleted')
         refetch();
         
      }
   }

   return (
      <div>
         <DashboardTitle title='Manage Orders' desc="Lorem ipsum is most popular text in the world. text in the world." />

         <p>orders : {orders?.length}</p>
         {
                orders.length === 0 ? <div className="flex items-center justify-center flex-col space-y-6">
                    <PiEmptyThin className="text-4xl sm:text-6xl"/>
                    <h2 className="text-lg sm:text-xl">No cars has been booked yet!</h2>
                    <Link to='/cars' className="btn">Brows Car</Link>
                </div> : <>

                    <div className="">
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-xs border *:border">
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <thead>
                                    <tr className="text-left">
                                        <th className="p-3">SL</th>
                                        <th className="p-3">Photo</th>
                                        <th className="p-3">Title</th>
                                        <th className="p-3">Tour Code</th>
                                        <th className="p-3">Name</th>
                                        <th className="p-3">Email</th>
                                        <th className="p-3">Status</th>
                                        <th className="p-3">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orders.map((booking, i) => <tr key={i} className="border">
                                            <td className="p-3">
                                                <p>{i + 1}</p>
                                            </td>
                                            <td className="p-3">
                                                <img src={booking.photo} className="w-10 h-10 object-cover" />
                                            </td>
                                            <td className="p-3">
                                                <p>{booking.title}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{booking.tourCode}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{booking.userName}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{booking.email}</p>
                                            </td>
                                            <td className="p-3">
                                                <span className="px-3 py-1 font-semibold rounded-md bg-green-500 text-white cursor-pointer">
                                                    <span>Confirm</span>
                                                </span>
                                            </td>

                                            <td className="p-3">
                                                <span
                                                    onClick={() => handleDelete(booking._id)} className="px-3 py-1 font-semibold rounded-md bg-red-500 text-white cursor-pointer">
                                                    <span>Delete</span>
                                                </span>
                                            </td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            }
      </div>
   );
};

export default Orders;