import React, { useState } from 'react';
import Tooltip from '../../utils/Tooltip';
import { Icon } from '@iconify/react';
import axios from 'axios';

const Summary = () => {
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [date, setDate] = useState('');

    const submitSummarizerQuery =async () => {
        const timeframe = {
            "year" : year,
            "month" : month,
            "timeframe" : date
        }
        const response = await axios.post('https://rockwell-project.onrender.com/summary/summarize', timeframe);
        if(response.status === 200) {
            console.log(response.data);
        }
        console.log(timeframe);
    }

    return (
        <div className="container">
            <h1 className="text-2xl text-gray-700 font-bold mb-4">Summary</h1>
            <div className="grid grid-cols-3 space-x-4 mb-8">
                <div className='col-span-1'>
                    <label htmlFor="year" className="block text-sm font-medium text-gray-700">
                        Year
                    </label>
                    <input
                        type="number"
                        id="year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        placeholder="YYYY"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label htmlFor="month" className="block text-sm font-medium text-gray-700">
                        Month
                    </label>
                    <select
                        id="month"
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                        <option value="" className='text-gray-300'>MM</option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                        Date
                    </label>
                    <input
                        type="number"
                        id="date"
                        value={date}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (value >= 1 && value <= 31) {
                                setDate(value);
                            }
                        }}
                        min="1"
                        max="31"
                        placeholder="DD"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>

            </div>
            <div className="flex flex-row items-center gap-2">
                <Tooltip content="Summarize">
                        <Icon icon="fluent:send-28-filled" height="24" className="text-blue-500 focus:outline-none" onClick={() => submitSummarizerQuery()}/>
                </Tooltip>
                <p className="bg-gray-100 text-gray-400 p-3 rounded-md w-full">Give timeframe to know the summary...</p>
            </div>
        </div>
    );
};

export default Summary;
