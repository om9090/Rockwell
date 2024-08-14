// import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
// import echo1 from "../../assets/echo1.jpeg";
import loginImg from "../../assets/login.png";

const LoginPage = () => {
  const { setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log("Form Data:", formData, "Data:", data);
    let response;
    try {
      //http://localhost:8000/auth/login
      //https://rockwell-project.onrender.com
      response = await axios.post(
        "http://localhost:8000/auth/login",
        {
          email: formData.get("email"),
          password: formData.get("password"),
        },
        { withCredentials: true, credentials: "include" }
      );
    } catch (error) {
      if (error.response) {
        response = error.response;
        toast.error(response.data.error);
      }
    }
    console.log("Login Response:", response);
    if (response.status === 200 && response.data?.email != null) {
      setUserInfo(response?.data);
      window.location.replace("/home");
      toast.success("Login Successful");
    } else {
      toast.error(response.data.error); // You can handle other cases accordingly
    }
  };

  return (
    <div className="grid grid-cols-2 h-[600px]">
      <div className="col-span-1">
        <img
          src={loginImg}
          alt="background"
          className=" w-full h-full object-cover"
        />
      </div>
      <div className="p-8 flex items-center justify-center">
        <div className="w-full max-w-md p-6 rounded-lg bg-white border">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">Login</h1>
          <form className="space-y-4" onSubmit={loginUser}>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                autoComplete="current-email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-2 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-2 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
            >
              Login
            </button>
            <hr className="my-4 border-gray-300" />
            <div className="flex gap-2">
              {/* <Link className='text-blue-500 hover:underline'>Forgot Password?</Link> */}
              <span> Don't have an account?</span>
              <Link to="/register" className="text-blue-500 hover:underline">
                Create an Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
