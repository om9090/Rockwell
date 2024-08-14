// import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import Select from "react-select";
import registerImg from "../../assets/signup.png";

const Register = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();
  const roleOptions = [
    { value: "customer", label: "Customer" },
    { value: "admin", label: "Admin" },
  ];
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData(e.target); // Create a new FormData object
    const data = {
      username: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      role: formData.get("role"),
    };
    const response = await axios.post(
      "https://rockwell-project.onrender.com/auth/signup",
      data,
      { withCredentials: true, credentials: "include" }
    );
    console.log("Register Response:", response);
    if (response.status === 200) {
      // Redirect to home page after successful registration
      setUserInfo(response.data.response);
      window.location.reload();
      // navigate("/home");
      toast.success("Registered Successfully");
    } else {
      toast.error("Registration Failed");
    }
  };
  console.log("userInfo from register", userInfo);
  return (
    <div className="grid grid-cols-2">
      <div className="col-span-1 h-[590px]">
        <img
          src={registerImg}
          alt="background"
          className="aspect-square object-cover w-full h-full"
        />
      </div>
      <div className="p-8 flex items-center justify-center">
        <div className="w-full max-w-md p-6 rounded-lg bg-white border">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">
            Create an Account
          </h1>
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                autoComplete="current-name"
                placeholder="Enter your full name"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-2 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                autoComplete="current-email"
                placeholder="Enter your email"
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

            {/* select a role */}

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Role
              </label>
              <Select
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused ? "" : "grey-400",
                  }),
                }}
                name="role"
                options={roleOptions}
              />
              {/* <input
                            type='text'
                            name='role'
                            autoComplete="current-role"
                            placeholder='Enter your role'
                            className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
                        /> */}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
            >
              Register
            </button>
          </form>
          <hr className="my-4 border-gray-300" />
          <div className="flex gap-2">
            <span>Already have an account? </span>
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
