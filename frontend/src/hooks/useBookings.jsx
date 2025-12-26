import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useBookings = () => {
   const { user } = useAuth();
   const axiosPUblic = useAxiosPublic();

   const { data: bookings = [], refetch } = useQuery({
      queryKey: ['bookings', user?.email],
      queryFn: async () => {
          const { data } = await axiosPUblic.get(`/bookings?email=${user?.email}`)
          return data;
      },
  })
  return [bookings, refetch]
};

export default useBookings;