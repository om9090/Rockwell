import React, { useContext } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext'; 

const Sidebar = ({ openMobileView, setOpenMobileView }) => {
    const { userInfo } = useContext(UserContext); 

    const menuAdmin = [
        { title: "Dashboard", src: "iconamoon:home-light", link: "/auth/home" },
        { title: "Users", src: "clarity:users-line", link: "/auth/users" },
        { title: "Department", src: "bi:boxes", link: "/auth/department" },
        { title: "Review", src: "tabler:message", link: "/auth/review" },
    ];

    const menuCustomer = [
        { title: "Dashboard", src: "iconamoon:home-light", link: "/auth/home" },
        // { title: "History", src: "iconamoon:history-light", link: "/history" },
        { title: "Summary", src: "fluent:notepad-edit-16-regular", link: "/auth/summary" },
    ];

    const menu = userInfo?.role === 'customer' ? menuCustomer : menuAdmin;
    // const menu = menuAdmin;
    return (
        <div className="fixed left-0 h-full mt-16 bg-white z-9999999">
            <div
                className={`${openMobileView ? "lg:w-56 w-72 " : "lg:w-14 w-0"} bg-dark-purple  border relative duration-300 h-full`}
            >
                <ul>
                    {menu.map((Menu, index) => (
                        <Link
                            to={Menu.link}
                            key={index}
                            className={`flex rounded-xl px-4 py-2 cursor-pointer hover:bg-gray-50 text-gray-700 text-sm items-center gap-x-4 
                            ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"}`}
                        >
                            <Icon icon={Menu.src} width={24} className='text-gray-700' />
                            <span className={`${!openMobileView && "hidden"} origin-left duration-200`}>
                                {Menu.title}
                            </span>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
