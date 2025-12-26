import toast from "react-hot-toast";
import useAxiosPublic from "../hooks/useAxiosPublic";
import DashboardTitle from "../Shared/DashboardTitle";
import useBookings from "../hooks/useBookings";
import { Link } from "react-router-dom";
import { PiEmptyThin } from "react-icons/pi";

const ManageBookings = () => {
    const axiosPUblic = useAxiosPublic();
    const [bookings, refetch] = useBookings();


    const handleDelete = async (id) => {
        const res = await axiosPUblic.delete(`/booking/${id}`)
        console.log(res);
        if (res.data.deletedCount > 0) {
            toast.success('Items has been deleted!')
            refetch()
        }
    }

    console.log(bookings);
    return (
        <div>
            <DashboardTitle title="Manage Bookings" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laboriosam." />
            {
                bookings.length === 0 ? <div className="flex items-center justify-center flex-col space-y-6">
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
                                </colgroup>
                                <thead>
                                    <tr className="text-left">
                                        <th className="p-3">SL</th>
                                        <th className="p-3">Photo</th>
                                        <th className="p-3">Title</th>
                                        <th className="p-3">Tour Code</th>
                                        <th className="p-3">Status</th>
                                        <th className="p-3">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        bookings.map((booking, i) => <tr key={i} className="border">
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
                                                <span className="px-3 py-1 font-semibold rounded-md bg-blue-500 text-white cursor-pointer">
                                                    <span>Pending</span>
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

export default ManageBookings;