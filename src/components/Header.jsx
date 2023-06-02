import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-screen bg-theme flex p-2">
      <Link to="/" className="flex items-center">
        <BiArrowBack size="30px" color="white" />
        <span className="text-white pl-4 text-lg">Go Back</span>
      </Link>
    </div>
  );
}

export default Header;
