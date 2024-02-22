import React from 'react'

const Content = () => {
    return (
        <div className=' min-h-100  dark:bg-slate-700 bg-slate-200 w-full rounded-xl p-10 text-center'>

            <ul className='text-xl grid sm:grid-cols-1    lg:grid-cols-2  xl:grid-cols-3   gap-5'>
                <li className='text-indigo-300  dark:bg-slate-200    bg-slate-500 rounded-md h-20 flex  justify-center items-center '><p>SM: indigo</p></li>
                <li className='text-sky-500  dark:bg-slate-200  bg-slate-500 rounded-md h-20  flex justify-center items-center'><p>MD: sky</p></li>
                <li className='text-yellow-400  dark:bg-slate-200  bg-slate-500 rounded-md h-20 flex justify-center items-center'><p>LG: yellow</p></li>
                <li className='text-purple-600 dark:bg-slate-200   bg-slate-500 rounded-md h-20 flex justify-center items-center'><p>XL: purple</p></li>
                <li className='text-rose-400  dark:bg-slate-200   bg-slate-500 rounded-md h-20 flex justify-center items-center'><p>2XL: rose</p></li>
            </ul>

        </div>
    )
}

export default Content