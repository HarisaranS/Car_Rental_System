import { Link, Navigate, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast'
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import GoogleLogin from "./GoogleLogin";
import { useState } from "react";
import { PiSpinnerGapThin } from "react-icons/pi";

const Register = () => {
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false)
    const { updateUserProfile, user, setUser } = useAuth()
    const navigate = useNavigate();

    if (user) {
        return <Navigate to='/'></Navigate>
    }

    const handleRegister = async e => {
        e.preventDefault();
        setLoading(true)
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        
        try {
            const result = await axiosPublic.post('/auth/register', { name, email, password });
            
            if (result.data.success) {
                setUser({ email, displayName: name, role: 'user' });
                toast.success("Account created successfully!");
                form.reset();
                navigate('/');
            }
        } catch (err) {
            toast.error(err.response?.data?.message || "Registration failed");
        }
        setLoading(false);
    }

    return (
        <div className="flex items-center justify-center w-full h-screen px-3">
            <form onSubmit={handleRegister} className="w-[400px] border px-6 py-12 space-y-5 shadow-[0px_0px_10px_0px] shadow-gray-300 rounded-xl bg-gray-100">
                <h2 className="text-2xl sm:text-3xl font-bold text-center pb-4">Create Your Account</h2>
                <div>
                    <p className="text-sm pb-1">Your Name : </p>
                    <input type="text" name="name" placeholder="Your Name" required className="border p-2 text-[15px] font-semibold text-gray-600 w-full outline-purple-400 bg-gray-200 rounded-lg" />
                </div>
                <div>
                    <p className="text-sm pb-1">Email address : </p>
                    <input type="email" name="email" placeholder="Email" required className="border p-2 text-[15px] font-semibold text-gray-600 w-full outline-purple-400 bg-gray-200 rounded-lg" />
                </div>
                <div>
                    <p className="text-sm pb-1">Password : </p>
                    <input type="password" name="password" placeholder="******" required className="border p-2 text-[15px] font-semibold text-gray-600 w-full outline-purple-400 bg-gray-200 rounded-lg" />
                </div>
                <button type="submit" className="p-2.5 text-[15px] font-semibold cursor-pointer hover:bg-purple-700 active:scale-[0.99] w-full bg-purple-600 text-white duration-200 rounded-lg">
                    {
                        loading ? <PiSpinnerGapThin className="text-2xl mx-auto animate-spin " /> : <span>Register</span>
                    }
                </button>
                <hr />
                <GoogleLogin />
                <p className="text-center text-sm">Already Have an Account ? <Link to='/login' className=" font-semibold hover:underline">Login</Link></p>
            </form>
        </div>
    );
};

export default Register;