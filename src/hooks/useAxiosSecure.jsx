import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "https://bistro-boss-server-rust-six.vercel.app",
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  // Request interceptor to add authorization header for every secure call to the api //

  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      console.log("req stopped by interceptor", token);
      config.headers.authorization = token ? `Bearer ${token}` : '';
      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
    );

  //Intercepts 401 and 402 status//

  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      console.log("interceptor error here", status);
      // for 401 or 403 logout the user and move user to the log in page//
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    },
    );

  return axiosSecure;
};

export default useAxiosSecure;
