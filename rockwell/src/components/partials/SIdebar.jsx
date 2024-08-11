import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom';

const SIdebar = ({openMobileView, setOpenMobileView}) => {
    const Menus = [
        { title: "Dashboard", src: "iconamoon:home-light", link: "/home" },
        { title: "Users", src: "clarity:users-line", link: "/users" },
        { title: "Department", src: "bi:boxes", link: "/department" },
        { title: "Review ", src: "simple-line-icons:note", link: "/review" },
    ];
    return (
        <div className="fixed left-0 h-full mt-16 bg-white z-9999999">
            <div
                className={` ${openMobileView ? "lg:w-56 w-72 " : "lg:w-20 w-0"
                    } bg-dark-purple p-5 border pt-4 relative duration-300 h-full`}
            >
                
                <ul className="">
                    {Menus.map((Menu, index) => (
                        <Link
                            to={Menu.link}
                            key={index}
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-700 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                                } `}
                        >
                            {/* <img src={`./src/assets/${Menu.src}.png`} /> */}
                            <Icon icon={Menu.src} width={24} className='text-gray-700' />
                            <span className={`${!openMobileView && "hidden"} origin-left duration-200`}>
                                {Menu.title}
                            </span>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SIdebar