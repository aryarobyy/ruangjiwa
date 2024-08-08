'use client'
import axios from 'axios'
import React from 'react'

const TestingPage = () => {
    const artikelData = {
        adminId: 123,
        artikelId: 321,
        name: "Irzi",
        title: "LOrem ipsum",
        description: "Desckripsi",
        date: new Date()
    };

  const handleClick = async () => {
    const response = await axios.post("/api/artikel", artikelData)
    console.log(response);
  }
  const postClick = async () => {
    const response = await axios.get("/api/artikel");
    console.log(response);
  };

  return (
    <>
      <div>akakakisdds</div>

      <div onClick={handleClick} className='cursor-pointer border-2 border-red-500 p-4 px-5'>
        <button>post</button>
      </div>
      <div onClick={postClick} className='cursor-pointer border-2 border-blue-500 p-4 px-5'>
        <button>get</button>
      </div>
    
    </>
  )
}

export default TestingPage