import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCars = () => {
    const axiosPublic = useAxiosPublic();
    const { data : cars = [], isLoading, refetch } = useQuery({
        queryKey: ['cars'],
        queryFn: async () => {
            const res = await axiosPublic.get('/cars')
            return res.data;
        }
    })
    return [cars, isLoading, refetch]
};

export default useCars;

