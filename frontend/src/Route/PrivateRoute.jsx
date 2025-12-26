import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
   const { user, loading } = useAuth();

   if (loading) {
      return <p className="text-center text-3xl flex items-center justify-center  w-full h-screen">
         <span>Loading...</span>
      </p>
   }
   if(user){
      return children;
   }
   return <Navigate to='/login'></Navigate>

};

export default PrivateRoute;