import toast from "react-hot-toast";
import DashboardTitle from "../Shared/DashboardTitle";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { ImSpinner9 } from "react-icons/im";
import { useState } from "react";

const AddCar = () => {
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false)

    const handleAddItem = async e => {
        e.preventDefault();
        setLoading(true)
        const form = e.target;
        const title = form.title.value;
        const photo = form.photo.value;
        const location = form.location.value;
        const locationURL = form.locationURL.value;
        const tourCode = form.tourCode.value;
        const speed = form.speed.value;
        const fuelType = form.fuelType.value;
        const seats = parseInt(form.seats.value);
        const doors = parseInt(form.doors.value);
        const price = parseInt(form.price.value);
        const fuel = form.fuel.value;
        const description = form.description.value;

        const carData = {
            title,
            photo,
            location,
            locationURL,
            tourCode,
            speed,
            price,
            fuelType,
            seats,
            doors,
            fuel,
            description
        }

        try {
            const res = await axiosPublic.post('/car', carData);
            if (res.data.insertedId) {
                toast.success('Car has been added successfully!');
                form.reset();
                setLoading(false);
            }
        } catch (error) {
            toast.error('Failed to add car');
            setLoading(false);
        }
    }

    return (
        <div>
            <DashboardTitle title="Post New Car" desc="Add a new car to the rental fleet" />

            <form onSubmit={handleAddItem} className="max-w-2xl mx-auto p-10 border rounded-xl space-y-4">
                <input type="text" name="title" placeholder="Car Title" className="border p-2 rounded-sm w-full" required />
                <input type="url" name="photo" placeholder="Photo URL" className="border p-2 rounded-sm w-full" required />
                <input type="text" name="location" placeholder="Location" className="border p-2 rounded-sm w-full" required />
                <input type="url" name="locationURL" placeholder="Location URL" className="border p-2 rounded-sm w-full" required />
                <input type="text" name="tourCode" placeholder="Tour Code" className="border p-2 rounded-sm w-full" required />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" name="speed" placeholder="Speed (e.g., 180 km/h)" className="border p-2 rounded-sm w-full" required />
                    <input type="text" name="fuelType" placeholder="Fuel Type" className="border p-2 rounded-sm w-full" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="number" name="seats" placeholder="Seats" className="border p-2 rounded-sm w-full" required />
                    <input type="number" name="doors" placeholder="Doors" className="border p-2 rounded-sm w-full" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="number" name="price" placeholder="Price per day" className="border p-2 rounded-sm w-full" required />
                    <input type="text" name="fuel" placeholder="Fuel Status" className="border p-2 rounded-sm w-full" required />
                </div>
                <textarea rows={4} name="description" placeholder="Car description" className="border p-2 rounded-sm w-full" required></textarea>
                <button className="cursor-pointer bg-purple-600 p-3 text-white rounded-xl font-semibold text-sm px-10 active:bg-purple-700">
                    {
                        loading ? <ImSpinner9 className="text-2xl animate-spin" /> : "ADD CAR"
                    }
                </button>
            </form>
        </div>
    );
};

export default AddCar;