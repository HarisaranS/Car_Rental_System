import { useState, useEffect } from 'react';
import useAxiosPublic from '../hooks/useAxiosPublic';
import DashboardTitle from '../Shared/DashboardTitle';
import toast from 'react-hot-toast';

const ManageCars = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = async () => {
        try {
            const response = await axiosPublic.get('/cars');
            setCars(response.data);
            setLoading(false);
        } catch (error) {
            toast.error('Failed to fetch cars');
            setLoading(false);
        }
    };

    const deleteCar = async (id) => {
        try {
            await axiosPublic.delete(`/car/${id}`);
            setCars(cars.filter(car => car._id !== id));
            toast.success('Car deleted successfully');
        } catch (error) {
            toast.error('Failed to delete car');
        }
    };

    if (loading) return <div className="text-center p-10">Loading...</div>;

    return (
        <div>
            <DashboardTitle title="Manage Cars" desc="View and manage all cars in the system" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {cars.map(car => (
                    <div key={car._id} className="border rounded-lg p-4 shadow-md">
                        <img src={car.photo} alt={car.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h3 className="text-lg font-semibold mb-2">{car.title}</h3>
                        <p className="text-gray-600 mb-2">{car.location}</p>
                        <p className="text-purple-600 font-bold mb-2">${car.price}/day</p>
                        <div className="flex justify-between text-sm text-gray-500 mb-4">
                            <span>{car.seats} seats</span>
                            <span>{car.fuelType}</span>
                        </div>
                        <button 
                            onClick={() => deleteCar(car._id)}
                            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
                        >
                            Delete Car
                        </button>
                    </div>
                ))}
            </div>
            
            {cars.length === 0 && (
                <div className="text-center p-10 text-gray-500">
                    No cars found. Add some cars to get started.
                </div>
            )}
        </div>
    );
};

export default ManageCars;