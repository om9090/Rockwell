import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import toast from "react-hot-toast";
import Tooltip from "../../utils/Tooltip";

const Header = ({ setOpen, open, isLogged }) => {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useContext(UserContext);

  const userName = userInfo?.username;
  const logout = async () => {
    const response = await axios.get(
      "https://rockwell-project.onrender.com/auth/logout",
      {
        withCredentials: true,
        credentials: "include",
      }
    );
    if (response.status === 200) {
      setUserInfo(null);
      // set messages to empty
      localStorage.removeItem("messages");
      navigate("/");
      toast.success("Logout Successful");
    } else {
      toast.error("Logout Failed");
    }
  };

  const clearChat = () => {
    localStorage.removeItem("messages");
    window.location.reload();
  }

  return (
    <header className="fixed top-0 w-full bg-white border-b-[1px] z-10">
      <div className="mx-auto py-4 px-8 max-w-screen-2xl">
        <div className="flex justify-between">
          <div className="flex items-center gap-4 text-gray-700">
            <div className="flex flex-row gap-2 items-center">
              <Icon
                icon="solar:hamburger-menu-linear"
                className={`mt-2 ${isLogged ? "block" : "hidden"} w-6 h-6 cursor-pointer`}
                onClick={() => setOpen(!open)}
              />
              <Link to="/auth/home" className="font-bold text-2xl">
                echo
              </Link>
            </div>
            {/* {userName ? <Search /> : ""} */}
          </div>
          <nav className="flex gap-4 text-lg font-semibold items-center">
            {userName ? (
              <div className="flex flex-row gap-4">
                <Tooltip content="New Chat">
                  <Icon icon="jam:write"
                    className="w-6 h-6 cursor-pointer"
                    onClick={clearChat}
                  />
                </Tooltip>
                <Tooltip content="Logout">
                  <Icon icon="material-symbols:logout"
                    className="w-6 h-6 cursor-pointer"
                    onClick={logout}
                  />
                </Tooltip>
              </div>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
