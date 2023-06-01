import { useState } from "react";




function Home() {
  
    const [username, setUsername] = useState('');
  
    const submitHandler = () => {
      
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