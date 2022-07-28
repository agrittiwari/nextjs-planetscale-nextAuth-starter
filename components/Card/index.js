import React from "react";
import Style from "./Card.module.css";
const Card = ({ val }) => {
  const { event, yearsAgo } = val;
  return (
    <div className='flex justify-center m-8'>
      <div className='flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg w-full'>
        <img
          className=' w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg'
          src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg'
          alt=''
        />
        <div className='p-6 flex flex-col justify-start'>
          <h5 className='text-gray-900 text-xl font-medium mb-2'>Card title</h5>
          <p className='text-gray-700 text-base mb-4'>{event}</p>
          <p className='text-gray-600 text-xs'>at {yearsAgo}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
