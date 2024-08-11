import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import IntialChatToDisplay from './components/IntialChatToDisplay';
import ChatResponse from './components/ChatResponse';
import axios from 'axios';

const HomePage = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (input.trim()) {
            // Add user message
            setMessages((prevMessages) => [...prevMessages, { text: input, user: 'user' }]);

            try {
                const response = await axios.post('https://rockwell-project.onrender.com/api/postquery', {
                    query: input,
                });

                console.log("response", response);

                if (response.status == 200 && response.data) {
                    // Add bot response
                    setMessages((prevMessages) => [...prevMessages, { text: response.data, user: 'bot' }]);
                } else {
                    setMessages((prevMessages) => [...prevMessages, { text: 'Sorry, I am not able to understand you.', user: 'bot' }]);
                }
            } catch (error) {
                console.error("Error fetching response:", error);
                setMessages((prevMessages) => [...prevMessages, { text: 'Sorry, something went wrong.', user: 'bot' }]);
            } finally {
                setInput('');
            }
        }
    };

    return (
        <div className='container w-full '>
            <div className='px-4 pt-4 rounded-lg h-full overflow-y-auto flex flex-col justify-between'>
                <div className="flex flex-col gap-2">
                    {messages.length === 0 && (
                        <div className='text-center text-gray-400'>
                            <IntialChatToDisplay />
                        </div>
                    )}
                    {messages.length !== 0 && messages.map((msg, index) => (
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
