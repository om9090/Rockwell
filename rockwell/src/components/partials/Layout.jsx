import Header from "./Header";
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
    return (
        <div className="mt-16">
            <Header />
            <Toaster position="top-center" />
            <Outlet />
        </div>
    );
}

export default Layout;
