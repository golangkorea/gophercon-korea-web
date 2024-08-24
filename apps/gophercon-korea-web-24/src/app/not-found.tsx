"use client";

import React from "react";

const NotFound: React.FC = () => (
  <div className='text- flex h-screen w-screen items-center justify-center bg-[#1D1D1D] text-sm md:text-2xl xl:text-2xl '>
    <pre className='flex flex-col'>
      <p>
        <span className='text-[#626B75]'>1 </span>
        <span className='text-[#C17CB5]'>if </span>
        <span className='text-[#C5C5C5]'>err != </span>
        <span className='text-[#4494CC]'>nil </span>
        <span className='text-[#FFCD35]'>{"{"}</span>
        <br />

        <span className='text-[#626B75]'>2 </span>
        <span className='ml-6'>
          <span className='text-[#C5C5C5]'>fmt.</span>
          <span className='text-[#D7D5A4]'>Println</span>
          <span className='text-[#C17CB5]'>(</span>
          <span className='animate-pulse font-bold text-[#CB8570]'>
            {'"'}
            {`This page doesn't exist`}
            {'"'}
          </span>
          <span className='text-[#C17CB5]'>)</span>
        </span>
        <br />

        <span className='text-[#626B75]'>3 </span>
        <span className='text-[#FFCD35]'>{"}"}</span>
      </p>
    </pre>
  </div>
);

export default NotFound;
