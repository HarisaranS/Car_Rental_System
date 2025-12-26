import { useState, useEffect } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { Link } from 'react-router-dom';

const AllCars = () => {
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
            console.error('Failed to fetch cars:', error);
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="text-center p-10">Loading cars...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Available Cars</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cars.map(car => (
                    <div key={car._id} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                        <img 
                            src={car.photo} 
                            alt={car.title} 
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{car.title}</h3>
                            <p className="text-gray-600 mb-2">{car.location}</p>
                            <p className="text-gray-700 mb-4">{car.description}</p>
                            
                            <div className="flex justify-between items-center mb-4">
                                <div className="text-sm text-gray-500">
                                    <span className="block">{car.seats} seats • {car.doors} doors</span>
                                    <span className="block">{car.fuelType} • {car.speed}</span>
                                </div>
                                <div className="text-right">
                                    <span className="text-2xl font-bold text-purple-600">${car.price}</span>
                                    <span className="text-gray-500">/day</span>
                                </div>
                            </div>
                            
                            <Link 
                                to={`/carDetails/${car._id}`}
                                className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors block text-center"
                            >
                                Book Now
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            
            {cars.length === 0 && (
                <div className="text-center p-10 text-gray-500">
                    <h2 className="text-xl mb-4">No cars available</h2>
                    <p>Please check back later for available cars.</p>
                </div>
            )}
        </div>
    );
};

export default AllCars;