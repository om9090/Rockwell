import { Icon } from '@iconify/react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../../context/UserContext'
// import ProfilePic from '../../utils/ProfilePic'
// import Search from '../Search'

const Header = ({setOpen, open}) => {
    const navigate = useNavigate()
    const { userInfo, setUserInfo } = useContext(UserContext)
    console.log("userinfo from header",userInfo);
    // useEffect(() => {
    //     const getProfile = async () => {
    //         const response = await axios.get('http://localhost:3000/profile', {
    //             withCredentials: true,
    //         })
    //         if (response.status === 200) {
    //             setUserInfo(response?.data?.user)
    //         }
    //     }
    //     getProfile()

    // }, [])

    const userName = userInfo?.username
    const logout = () => {
        setUserInfo(null)
        navigate('/login')
    //     const response = await axios.get('http://localhost:3000/logout', {
    //         withCredentials: true,
    //     })
    //     if (response.status === 200) {
    //         setUserInfo(null)
    //     }
    }

    return (
        <header className="fixed top-0 w-full bg-white border-b-[1px] z-10">
            <div className="mx-auto py-4 px-8 max-w-screen-2xl">
                <div className="flex justify-between">
                    <div className="flex items-center gap-4 text-gray-700">
                        <div className="flex flex-row gap-2 items-center">
                            <Icon icon="solar:hamburger-menu-linear" className={`mt-2`} onClick={() => setOpen(!open) }/>
                            <Link to="/" className="font-bold text-2xl">echo</Link>
                        </div>
                        {/* {userName ? <Search /> : ""} */}
                    </div>
                    <nav className="flex gap-4 text-lg font-semibold items-center">
                        {userName ? (
                            <div>
                                <Icon icon="material-symbols-light:logout" className="w-6 h-6 cursor-pointer" onClick={logout} />
                            </div>
                        ) : (
                            <>
                                <Link to="/login">
                                    Login
                                </Link>
                                <Link to="/register">Register</Link>
                            </>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header