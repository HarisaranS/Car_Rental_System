import { useLoaderData, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import useAxiosPublic from '../hooks/useAxiosPublic';
import toast from 'react-hot-toast';

const CardDetails = () => {
    const car = useLoaderData();
    const { user } = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false);

    const handleBooking = async (e) => {
        e.preventDefault();
        
        if (!user) {
            toast.error('Please login to book a car');
            navigate('/login');
            return;
        }

        setLoading(true);
        const form = e.target;
        const startDate = form.startDate.value;
        const endDate = form.endDate.value;
        const days = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));
        const totalPrice = days * car.price;

        const bookingData = {
            carId: car._id,
            carTitle: car.title,
            carPhoto: car.photo,
            userEmail: user.email,
            userName: user.displayName || user.email,
            startDate,
            endDate,
            days,
            pricePerDay: car.price,
            totalPrice,
            status: 'pending',
            bookingDate: new Date().toISOString()
        };

        try {
            const response = await axiosPublic.post('/booking', bookingData);
            if (response.data.insertedId) {
                toast.success('Car booked successfully!');
                form.reset();
                navigate('/dashboard/manageBookings');
            }
        } catch (error) {
            toast.error('Booking failed. Please try again.');
        }
        setLoading(false);
    };

    if (!car) {
        return <div className="text-center p-10">Car not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <img 
                            src={car.photo} 
                            alt={car.title} 
                            className="w-full h-64 object-cover rounded-lg"
                        />
                        <div className="mt-6">
                            <h1 className="text-3xl font-bold mb-4">{car.title}</h1>
                            <p className="text-gray-600 mb-4">{car.description}</p>
                            
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <h3 className="font-semibold">Location</h3>
                                    <p>{car.location}</p>
                                </div>
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <h3 className="font-semibold">Speed</h3>
                                    <p>{car.speed}</p>
                                </div>
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <h3 className="font-semibold">Seats</h3>
                                    <p>{car.seats} passengers</p>
                                </div>
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <h3 className="font-semibold">Fuel Type</h3>
                                    <p>{car.fuelType}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border rounded-lg p-6 shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Book This Car</h2>
                        <div className="text-3xl font-bold text-purple-600 mb-6">
                            ${car.price}<span className="text-lg text-gray-500">/day</span>
                        </div>

                        <form onSubmit={handleBooking} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Start Date</label>
                                <input 
                                    type="date" 
                                    name="startDate"
                                    required
                                    min={new Date().toISOString().split('T')[0]}
                                    className="w-full p-3 border rounded-lg"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium mb-2">End Date</label>
                                <input 
                                    type="date" 
                                    name="endDate"
                                    required
                                    min={new Date().toISOString().split('T')[0]}
                                    className="w-full p-3 border rounded-lg"
                                />
                            </div>

                            <button 
                                type="submit"
                                disabled={loading}
                                className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 disabled:opacity-50"
                            >
                                {loading ? 'Booking...' : 'Book Now'}
                            </button>
                        </form>

                        {!user && (
                            <p className="text-center text-gray-500 mt-4">
                                Please <span className="text-purple-600 cursor-pointer" onClick={() => navigate('/login')}>login</span> to book this car
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;