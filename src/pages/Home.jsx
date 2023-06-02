import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [username, setUsername] = useState("");

  return (
    <div className="min-h-screen flex flex-col justify-center gap-6 items-center">
      <h3 className="text-4xl">Find a User on Torre</h3>
      <input
        className="w-4/5 h-10 pl-6 border-2 rounded-md sm:max-w-md"
        type="text"
        placeholder="Enter username here"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <Link
        to={username}
        className="px-12 py-2 rounded-md bg-gradient-to-r from-sky-500 to-indigo-500 text-white"
      >
        Submit
      </Link>
      <div>
        <p className="text-lg text-theme">
          For example, search by using <span className="italic">zafferali</span>
        </p>
      </div>
    </div>
  );
}

export default Home;
