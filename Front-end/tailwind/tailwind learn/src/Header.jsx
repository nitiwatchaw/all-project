import React, { useState, useEffect } from 'react'

const Header = () => {




    const handleDarkMode = () => {
        document.body.classList.toggle('dark')
    }
    return (
        <div>
            <h1 className="text-4xl text-opacity-70  text-center font-bold  text-slate-900  dark:text-white  ">
                TailWind  <span className='underline  decoration-red-300   
      sm:decoration-indigo-300 
      md:decoration-sky-500    
      lg:decoration-yellow-400
      xl:decoration-purple-600
      2xl:decoration-rose-400
      underline-offset-8   uppercase'>css</span>
            </h1>
            <div className="btn-wrap w-full  mt-5 flex   justify-center">
                <button onClick={handleDarkMode} className="w-40 h-11 rounded-full bg-sky-400 uppercase hover:brightness-90  focus:brightness-50  active:brightness-20
       text-white   dark:text-black  shadow-lg shadow-blue-500/50 font-semibold  tracking-wide">Dark Mode</button>
            </div>

            <div className="section flex gap-20 mt-10 flex-col  lg:flex-row">
                <div className="section-1 border border-gray-200 rounded-lg p-8 dark:text-white">
                    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorum distinctio in enim non ullam,
                        officia autem laboriosam eaque repellat unde rerum nam consectetur nulla cum,
                        fuga doloremque, deserunt officiis incidunt?</p>
                </div>
                <div className="section-2 border border-gray-200  rounded-lg p-8  dark:text-white ">
                    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorum distinctio in enim non ullam,
                        officia autem laboriosam eaque repellat unde rerum nam consectetur nulla cum,
                        fuga doloremque, deserunt officiis incidunt?</p>
                </div>
            </div></div>
    )
}

export default Header