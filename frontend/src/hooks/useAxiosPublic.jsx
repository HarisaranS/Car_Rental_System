import axios from 'axios';

const apiURL = import.meta.env.VITE_API_URL;
console.log("Vite API URL:", apiURL);

if (!apiURL) {
  console.error("VITE_API_URL is not defined in environment variables!");
}

const axiosPublic = axios.create({
  baseURL: apiURL,
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
