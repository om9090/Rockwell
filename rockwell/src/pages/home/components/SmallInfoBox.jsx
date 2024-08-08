import React from 'react'
import { Icon } from '@iconify/react';

const SmallInfoBox = ({ iconName }) => {
    return (
        <div className='bg-white p-4 gap-4 rounded-lg flex border lg:w-[200px] lg:items-center lg:flex-col flex-row'>
            <Icon icon={iconName} />
            <p className='text-gray-400 text-sm'>Description</p>
        </div>
    )
}

export default SmallInfoBox