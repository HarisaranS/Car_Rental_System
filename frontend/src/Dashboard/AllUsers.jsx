import DashboardTitle from "../Shared/DashboardTitle";
import Swal from 'sweetalert2'
import toast from 'react-hot-toast'
import useAxiosPublic from "../hooks/useAxiosPublic";
import useUsers from "../hooks/useUsers";

const AllUsers = () => {

    const axiosPublic = useAxiosPublic();
    const [users, refetch] = useUsers();




    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.delete(`/user/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })

            }
        });
    }

    // admin update
    const handleAdminUpdate = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to make him as an admin ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I want"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.patch(`/user/${id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            toast.success('User has been updated as  a Admin.')
                            refetch()
                        }

                    })
            }
        })

    }

    console.log(users);
    return (
        <div>
            <DashboardTitle title="Manage All Users" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laboriosam." />

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
                                <th className="p-3">Name</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Role</th>
                                <th className="p-3">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, i) => <tr key={i} className="border">
                                    <td className="p-3">
                                        <p>{i + 1}</p>
                                    </td>
                                    <td className="p-3">
                                        {user.photo ? (
                                            <img src={user.photo} className="w-10 h-10 object-cover rounded-full" alt="Profile" />
                                        ) : (
                                            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                                                <span className="text-gray-600 text-sm font-semibold">
                                                    {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                                                </span>
                                            </div>
                                        )}
                                    </td>
                                    <td className="p-3">
                                        <p>{user.name}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{user.email}</p>
                                    </td>
                                    <td onClick={() => handleAdminUpdate(user._id)} className="p-3 cursor-pointer">
                                        <p className={user.role === 'user' ? 'text-blue-600' : 'text-green-600'}>{user.role}</p>
                                    </td>

                                    <td onClick={() => handleDelete(user._id)} className="p-3">
                                        <span className="px-3 py-1 font-semibold rounded-md bg-red-500 text-white cursor-pointer">
                                            <span>Delete</span>
                                        </span>
                                    </td>
                                </tr>)
                            }



                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AllUsers;