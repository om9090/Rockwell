import React, { useState } from 'react'
import { Icon } from '@iconify/react'

const SIdebar = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", src: "iconamoon:home-light" },
        { title: "Inbox", src: "solar:inbox-line-duotone" },
        { title: "Accounts", src: "material-symbols-light:account-tree-outline", gap: true },
        { title: "Schedule ", src: "solar:calendar-line-duotone" },
        // { title: "Search", src: "Search" },
        // { title: "Analytics", src: "Chart" },
    ];
    return (
        <div className="fixed left-0 h-full mt-16">
            <div
                className={` ${open ? "w-56" : "w-20 "
                    } bg-dark-purple p-5 border pt-4 relative duration-300 h-full`}
            >
                <Icon icon="ant-design:right-circle-outlined"
                    className={`absolute cursor-pointer -right-3 top-9 w-7 rounded-full text-gray-700 ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                    width={24}
                />

                {/* <div className="flex gap-x-4 items-center"> */}
                {/* <Icon icon="icon-park-outline:right-c" className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
                        }`} /> */}
                {/* <img
                        src="./src/assets/logo.png"
                        className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
                            }`}
                    /> */}
                {/* <h1
                        className={`text-gray-700 origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                            }`}
                    >
                        Designer
                    </h1> */}
                {/* </div> */}
                <ul className="">
                    {Menus.map((Menu, index) => (
                        <li
                            key={index}
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-700 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                                } `}
                        >
                            {/* <img src={`./src/assets/${Menu.src}.png`} /> */}
                            <Icon icon={Menu.src} width={24} className='text-gray-700' />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                {Menu.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SIdebar