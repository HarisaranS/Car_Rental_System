import useAuth from "../hooks/useAuth";


const Profile = () => {
   const {user} = useAuth();
   

   return (
      <div className="max-w-sm mx-auto px-3 my-20 py-10 border rounded-xl">
         <div className="flex items-center justify-center mb-6">
            <img src={user?.photoURL} className="rounded-full w-24" />
         </div>
         
         <div className="pt-4 space-y-3">
            <p><span className="font-semibold">Name </span> <span className="text-purple-700">: {user?.displayName}</span></p>
            <p><span className="font-semibold">Email </span> <span className="text-purple-700">: {user?.email}</span></p>

         </div>

      </div>
   );
};

export default Profile;