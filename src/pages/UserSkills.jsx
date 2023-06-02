import React, { useEffect, useState } from 'react'
import Category from '../components/Category'
import axios from 'axios'


function UserSkills() {
    const username = "zafferali"
    const url = `https://torre-test-backend.vercel.app/${username}`
    const [user, setUser] = useState(null)
    const skills = ['1', '2', '3']

    async function getUser() {
        const response = await axios.get(url)
        if (response.status == 200) {
            setUser(response.data)
        }
    } 

    useEffect( () => {
        getUser()

    },[])

    console.log("User", user);

  return (
    <div className='min-h-screen text-theme px-3'>
        <div className='flex flex-col items-center'>
            <div className='w-32 h-32 mt-14 mb-4'>
                <img 
                    className='w-full h-full object-top rounded-full'
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Profile" 
                />
            </div>
            <h1 className='font-bold text-3xl mb-8'>Zaffer Ali</h1>
        </div>

        <div className='font-light'>
            <h2 className='text-theme text-xl text-center mb-4'>SKILLS AND INTERESTS</h2>
            <div className='max-w-3xl mx-auto '>      
                <Category skills={skills} heading="Master/Influencer"/>
                <Category skills={skills} heading="Expert"/>
                <Category skills={skills} heading="Proficient"/>
                <Category skills={skills} heading="Beginner"/>
                <Category skills={skills} heading="No experience, but interested"/>
            </div>

        </div>

    </div>
  )
}

export default UserSkills
