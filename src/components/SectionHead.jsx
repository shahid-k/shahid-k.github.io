import React from 'react';

const SectionHead = ({ children }) => {
  return (
    <div>
      <h2 className='relative text-3xl font-bold my-6 text-center'>
        <span className='text-transparent md:text-4xl lg:text-5xl xl:text-7xl bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 '>
          {children}
        </span>
      </h2>
    </div>
  );
};

export default SectionHead;