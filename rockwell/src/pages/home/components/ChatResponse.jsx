import React from 'react'
import photo from '../../../assets/photo.jpg'

const ChatResponse = ({ message }) => {
    return (
        <div className={`flex flex-row ${message.user == "user" ? "justify-end" : ""} gap-2 items-center`}>
            {message.user != "user" && // round image for bot
                <div className="flex flex-row justify-start">
                    <img src="https://i.pravatar.cc/150?img=3" alt="bot" className="w-8 h-8 rounded-full" />
                </div>
            }
            <div className='bg-slate-100 rounded-xl p-2'>
                <p>{message.text}</p>
            </div>
            {message.user == "user" && // round image for user
                <div className="flex flex-row justify-end">
                    <img src={photo} alt="user" className="w-8 h-8 rounded-full" />
                </div>
            }
        </div>
    )
}

export default ChatResponse