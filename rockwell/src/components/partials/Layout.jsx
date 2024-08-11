import Header from "./Header";
import SIdebar from "./SIdebar";
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useState } from "react";

const Layout = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex flex-col h-full">
            <Header setOpen = {setOpen} open={open}/>
            <div className="h-full">
                <SIdebar openMobileView={open} setOpenMobileView={setOpen}/>
            </div>
            <Toaster position="top-center" />
            <Outlet />
        </div>
    );
}

export default Layout;
