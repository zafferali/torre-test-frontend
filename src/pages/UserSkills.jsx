import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Category from '../components/Category';
import axios from 'axios'

function UserSkills() {
    const location = useLocation();
    const url = `https://torre-test-backend.vercel.app${location.pathname}`;
    const [user, setUser] = useState({});
    const [error, setError] = useState(false);

    const [loading, setLoading] = useState(false);

    const getUser = async () => {
        try {
            setLoading(true); // Set loading before sending API request
            const res = await axios.get(url);
            setUser(res.data);
            setLoading(false);
        } catch (error) {
            setLoading(false); // Stop loading in case of error
            setError(true);
            console.log("rr", error);
        }
    }

    useEffect( () => {
        getUser();
    },[]);

    const master = user?.skills?.filter(skill => skill.proficiency == 'master');
    const expert = user?.skills?.filter(skill => skill.proficiency == 'expert')
    const proficient = user?.skills?.filter(skill => skill.proficiency == 'proficient')
    const beginner = user?.skills?.filter(skill => skill.proficiency == 'novice')
    const interested = user?.skills?.filter(skill => skill.proficiency == 'no-experience-interested')

  return (
    <>{loading ? 
    <div className="flex justify-center mt-4">
        <h2 className="text-xl font-bold">Loading</h2>
    </div> :
    error ? <div className="flex justify-center mt-4">
        <p className="text-2xl text-red-500">User not found</p>
    </div> :
    <div className='min-h-screen text-theme px-3'>
        <div className='flex flex-col items-center'>
            <div className='w-32 h-32 mt-14 mb-4'>
                <img 
                    className='w-full h-full object-top rounded-full'
                    src={user?.picture} alt="Profile" 
                />
            </div>
            <h1 className='font-bold text-3xl mb-8'>{user?.name}</h1>
        </div>

        <div className='font-light'>
            <h2 className='text-theme text-xl text-center mb-4'>SKILLS AND INTERESTS</h2>
            <div className='max-w-3xl mx-auto'>
                <Category skills={master} heading="Master/Influencer"/>
                <Category skills={expert} heading="Expert"/>
                <Category skills={proficient} heading="Proficient"/>
                <Category skills={beginner} heading="Beginner"/>
                <Category skills={interested} heading="No experience, but interested"/>
            </div>
        </div>
    </div>}
    </>
  )
}

export default UserSkills
