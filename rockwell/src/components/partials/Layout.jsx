import Header from "./Header";
import SIdebar from "./SIdebar";
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import WelcomePage from "../WelcomePage";

const Layout = () => {
    const { userInfo, setUserInfo } = useContext(UserContext);

    const isLogged = userInfo ? true : false;
    const [open, setOpen] = useState(false);

    if (!isLogged) {
        return (
            <div className="flex flex-col h-full">
                <Header setOpen={setOpen} open={open} isLogged = {isLogged}/>
                <WelcomePage />
                <Toaster position="top-center" />
            </div>
        );
    } else {
        return (
            <div className="flex flex-col h-full">
                <Header setOpen={setOpen} open={open} isLogged = {isLogged}/>
                <SIdebar openMobileView={open} setOpenMobileView={setOpen} />
                <Toaster position="top-center" />
                <Outlet />
            </div>
        );
    }

    // return (
    //     <div className="flex flex-col h-full">
    //         <Header setOpen = {setOpen} open={open}/>
    //         {/* <SIdebar openMobileView={open} setOpenMobileView={setOpen}/> */}
    //         <Toaster position="top-center" />
    //         <Outlet />
    //     </div>
    // );
}

export default Layout;
