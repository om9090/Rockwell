import Header from "./Header";
import SIdebar from "./SIdebar";
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
    return (
        <div className="flex flex-col h-full">
            <Header />
            <div className="h-full">
                <SIdebar />
            </div>
            <Toaster position="top-center" />
            <Outlet />
        </div>
    );
}

export default Layout;
