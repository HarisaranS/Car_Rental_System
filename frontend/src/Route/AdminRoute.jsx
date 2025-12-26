import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
   const { user,loading } = useAuth();
   const [isAdmin, isLoading] = useAdmin();

   
   if (loading || isLoading) {
      return <p className='text-5xl font-semibold'>Loading...</p>
   }

   if(isAdmin?.role === 'admin' && user){
      return children
   }
   return <Navigate to='/'></Navigate>
};




export default AdminRoute;