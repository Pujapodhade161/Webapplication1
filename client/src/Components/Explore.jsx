import React, { useEffect, useState } from 'react'
import data from '../assets/profileData'
import { useNavigate } from 'react-router-dom'

const Explore = () => {
    const [user,setUser] = useState('')
    const [searchedUser,setSearchedUser] = useState([])
    const [searching,setSearching] = useState(0)
    const nav = useNavigate(0)
    useEffect(() => {
        console.log('hello')
        console.log(data)
    }, [])
    const handleChange = (e)=>{
        let temp = []
        setUser(e.target.value)
        setSearching(1)
        data.forEach(ele=>{
            if(ele.name.includes(user)){
                temp.push(ele)
            }
        })

        setSearchedUser(temp)
    }
    return (
        <div className='px-6 md:px-24 py-12'>
            <h2 className='text-4xl'>Explore Our Featured Profiles</h2>
            <input type="text" className='text-sm bg-slate-100 focus:outline-none px-3 py-2 rounded-lg mt-8' placeholder='Search users' value={user} onChange={handleChange} onBlur={()=>setSearching(0)}/>
            <section className='my-12 flex gap-4 flex-wrap'>
                {
                    !searching ? 
                    data?.map((user) => {
                        return (
                            <div className='bg-slate-100 p-3 w-[400px] group relative cursor-pointer rounded-lg'>
                                <div>
                                    <p className='text-2xl font-semibold text-gray-600'>{user.name}</p>
                                    <p className='text-gray-700 text-sm'>{user.jobDescription}</p>
                                    <p className='mt-3'>{user.address}</p>
                                    <p>{user.contact}</p>
                                </div>
                                <i className='bx bx-info-circle text-xl absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity' onClick={() => nav(`/explore/${user.id}`, {
                                    state: {
                                        location: user.coordinates
                                    }
                                })}></i>
                            </div>
                        )
                    }) : searchedUser?.map((user) => {
                        return (
                            <div className='bg-slate-100 p-3 w-[400px] group relative cursor-pointer rounded-lg'>
                                <div>
                                    <p className='text-2xl font-semibold text-gray-600'>{user.name}</p>
                                    <p className='text-gray-700 text-sm'>{user.jobDescription}</p>
                                    <p className='mt-3'>{user.address}</p>
                                    <p>{user.contact}</p>
                                </div>
                                <i className='bx bx-info-circle text-xl absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity' onClick={() => nav(`/explore/${user.id}`, {
                                    state: {
                                        location: user.coordinates
                                    }
                                })}></i>
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default Explore
