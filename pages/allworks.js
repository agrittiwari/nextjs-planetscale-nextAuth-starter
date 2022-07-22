import Link from "next/dist/client/link";
import React, { useState } from "react";
import Nav from "../components/Nav/Nav";
import AllWorkForm from "../components/AllWorkForm";

const allworks = () => {
  return (
    <>
      <div className='p-10 mx-auto max-w-4xl'>
        <Link href='/'>
          <a className='text-6xl font-bold mb-4 text-center'>
            Development branch
          </a>
        </Link>
        <p className='mb-20 text-xl text-center'>
          🔥 Shop from the hottest items in the world 🔥
        </p>
        <div className='flex justify-center'>
          <Nav />
        </div>
        <div className='flex justify-center my-5'>
          <AllWorkForm />
        </div>
      </div>
    </>
  );
};

export default allworks;
