import React from 'react';

const Tooltip = ({ content, children }) => {
  return (
    <div className="relative inline-block group">
      {children}
      <div className="absolute mt-1 left-1/2 transform -translate-x-1/2 z-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs whitespace-nowrap rounded-md p-2">
        <span>{content}</span>
      </div>
    </div>
  );
};

export default Tooltip;