import React from 'react';
import { Icon } from '@iconify/react';

const Search = () => {
    return (
        <div className="flex items-center border border-gray-300 rounded-full px-3 py-2">
            <Icon icon="material-symbols-light:search" className="text-gray-400" />
            <input 
                type="text" 
                placeholder="Search" 
                className="outline-none ml-2 placeholder-gray-400 text-gray-500 font-thin text-sm"
            />
        </div>
    );
};

export default Search;
