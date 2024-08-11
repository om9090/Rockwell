import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import IntialChatToDisplay from './components/IntialChatToDisplay';
import ChatResponse from './components/ChatResponse';

const HomePage = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            setMessages([...messages, { text: input, user: 'user' }]);
            setInput('');
            // Simulate bot response
            setTimeout(() => {
                setMessages(prevMessages => [...prevMessages, { text: 'This is a bot response.', user: 'bot' }]);
            }, 1000);
        }
    };

    return (
        <div className='container w-full '>
            <div className='px-4 pt-4 rounded-lg h-full overflow-y-auto flex flex-col justify-between'>
                <div className="div">

                    {
                        messages.length === 0 && (
                            <div className='text-center text-gray-400'>
                                <IntialChatToDisplay />
                            </div>
                        )
                    }
                    {messages.length !== 0 && messages.map((msg, index) => (
                        // <div
                        //     key={index}
                        //     className={`mb-2 p-2 rounded-xl ${msg.user === 'user' ? 'self-end text-right' : 'bg-slate-50 self-start text-left'}`}
                        // >
                        //     {msg.text}
                        // </div>
                        <ChatResponse key={index} message={msg} />
                    ))}
                </div>
                <form onSubmit={handleSubmit} className='mt-4 flex items-center'>
                    <input
                        type='text'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder='Type your message...'
                        className='p-2 w-full border border-gray-300 rounded-md focus:outline-none'
                    />
                    <button
                        type='submit'
                        className='ml-2 p-2 text-blue-500 focus:outline-none'
                    >
                        <Icon icon="fluent:send-28-filled" height='24' widhth='24' />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default HomePage;
