"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState(''); 
  const [mainTask, setmainTask] = useState([]);
  const submitHandler = (e) =>{
    e.preventDefault();
    setmainTask([...mainTask , {title, desc}]);
    setTitle("")
    setDesc("")
  }

  const deleteHandler = (i) =>{
    console.log("deleted")
    let tasks = [...mainTask];
    tasks.splice(i,1);
    setmainTask(tasks);
  }
  let renderTask =  <h2>No tasks added</h2>
   
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i)=>{
      return <li  className='border border-r-cyan-900 p-3 list-none'>
        <div key={i} className='flex justify-evenly'>
        <h5 key={i}>Title: {t.title}</h5>
        <h5 key={i}>Desc: {t.desc}</h5>
        <button onClick={()=>{
          deleteHandler(i)
        }} className='bg-red-400 text-white p-2'>remove</button>
      </div>
      </li>
    })
  }

  return (
    <>
      <h1 className='text-3xl text-slate-800'>to-do list</h1>
      <form className='grid grid-cols-1 justify-center' onSubmit={submitHandler}>
        <input className='border-2 border-zinc-800 p-3 m-5 rounded-md' type="text"  name="" id="" value={title} onChange={(e)=> setTitle(e.target.value)} placeholder='title'/>
        <input className='border-2 border-zinc-800 p-3 m-5 rounded-md' type="text"  name="" id="" value={desc} onChange={(e)=> setDesc(e.target.value)} placeholder='desc'/>
        <button className='p-4 bg-black text-white' type="submit">Add</button>
      </form>
      <hr className='bg-black '/>
      <div className='mt-5 bg-slate-800 text-white p-6 '>
        <div>
        {renderTask}
        </div>
      
  
      </div>
    </>
  )
}

export default page
