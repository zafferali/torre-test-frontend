import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";




function Home() {
   
    const [username, setUsername] = useState('');
    // const url = `http://127.0.0.1:8000/${username}`
  
    const  submitHandler = async () => {
      // const response = await axios.get(url)
      // console.log(response.data)
      
    }

  return (
    <div className='min-h-screen flex flex-col justify-center gap-6 items-center'>
        <input
            className='w-4/5 h-10 pl-6 border-2 rounded-md sm:max-w-md' 
            type="text" 
            placeholder='Enter username here'
            onChange={e => setUsername(e.target.value)}
            value={username}
        />
        <button className='px-12 py-2 rounded-md bg-theme text-white' onClick={submitHandler}>
            Submit
        </button>
    </div>
  )
}

export default Home
