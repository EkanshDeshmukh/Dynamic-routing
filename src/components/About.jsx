import React from 'react';
const About = () => {
  return (
    <>
      <div className='h-screen w-full flex items-center flex-col justify-center text-center' >
        <h1 className='text-3xl'>This is  About page</h1>
        <p className='text-center w-[60%] m-5 opacity-50 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias veniam eius quaerat aliquam cupiditate fugit voluptatum qui non voluptas incidunt neque dolores ut, repellendus, quos asperiores nostrum dolor maiores obcaecati!</p>
        <button className='px-3 py-2 rounded-md bg-blue-500 text-white'>Explore More</button>
      </div>
    </>
  );
};

export default About;
