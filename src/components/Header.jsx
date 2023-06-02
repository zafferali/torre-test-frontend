import React from 'react'
import { BiArrowBack } from "react-icons/bi";
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className='w-screen bg-theme h-8 flex px-2'>
       <Link to="/"><BiArrowBack size='30px' color='white'/></Link>
    </div>
  )
}

export default Header;
