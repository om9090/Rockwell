import React from 'react'
import SmallInfoBox from './SmallInfoBox'

const IntialChatToDisplay = () => {
    const iconNameArray = ['fluent:people-team-28-filled', 'fluent:people-team-28-filled', 'fluent:people-team-28-filled'];
    return (
        <div className=''>
            <h1 className='text-2xl font-semibold'>Welcome to Echo</h1>
            <div className="w-full flex lg:flex-row flex-col justify-between mt-12 lg:gap-0 gap-8">
                {iconNameArray.map((iconName, index) => (
                    <SmallInfoBox key={index} iconName={iconName} />
                ))}
            </div>
        </div>
    )
}

export default IntialChatToDisplay
