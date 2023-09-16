import React from 'react'
import home1 from '../assets/home1.svg'
import home2 from '../assets/home2.svg'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className='md:px-24 px-8 py-20 flex flex-col gap-12 md:gap-0 md:flex-row items-center justify-between'>
                <div>
                    <p className='text-[35px] md:text-[44px] font-semibold mb-5'>Explore profiles and their<br /> locations interactively.</p>
                    <Link to={'/explore'} className='bg-[#3f3d56] px-8 py-3 text-white rounded-3xl'>Explore</Link>
                </div>
                <img src={home2} alt="maps" className='w-[550px]' />
            </div>

            <div className='md:px-24 px-8 py-20 flex flex-col gap-12 md:gap-0 md:flex-row items-center justify-between'>
                <img src={home1} alt="maps" className='w-[550px]' />
                <p className='text-[35px] md:text-[40px] font-semibold'>Embark on a journey to discover fascinating individuals and their diverse locations.</p>
            </div>
        </>
    )
}

export default Home
