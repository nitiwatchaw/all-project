import React, { useState, useEffect } from 'react'
import { GoChevronLeft, GoChevronRight, GoBell } from "react-icons/go";
import { FaArrowDownLong } from "react-icons/fa6";
const navigate = ({
    onPrev,
    onNext,
    disableRight,
    disableLeft,
    isScoll,
    isScollTrack
}) => {


    const active = '!bg-[#121212]'
    const trackActive = '!bg-[#4747478a]'
    return (
        <div className={`${isScoll && active} ${isScollTrack && trackActive}   bg-transparent transition duration-300 flex item-center justify-between sticky top-0 right-0 w-full h-[70px] rounded-t-lg  p-6`}>
            <div className="flex items-center gap-3">
                <button
                    title='ย้อนกลับ'
                    disabled={disableLeft}
                    onClick={onPrev}
                    className='bg-black rounded-full p-1 disabled:!cursor-not-allowed disabled:opacity-50'>
                    <GoChevronLeft className='text-[30px]' />
                </button>
                <button
                    title='ไปข้างหน้า'
                    disabled={disableRight}
                    onClick={onNext}
                    className='bg-black rounded-full p-1 disabled:!cursor-not-allowed disabled:opacity-50'>
                    <GoChevronRight className='text-[30px]' />
                </button>
            </div>
            <div className="flex items-center gap-3">
                <button className='bg-white text-black rounded-full py-2 px-4 font-bold'>
                    สำรวจ Premium
                </button>
                <button className='flex items-center bg-black rounded-full py-2 px-4 gap-3'>
                    <span className='border-2 p-1 text-xs rounded-full'> <FaArrowDownLong /> </span> ติดตั้งแอพ
                </button>
                <button className='bg-black p-2 rounded-full text-xl'>
                    <span ><GoBell /></span>
                </button>
            </div>
        </div>
    )
}

export default navigate