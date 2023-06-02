import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Category from "../components/Category";
import axios from "axios";

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
      console.log("User", res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false); // Stop loading in case of error
      setError(true);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const master = user?.skills?.filter((skill) => skill.proficiency == "master");
  const expert = user?.skills?.filter((skill) => skill.proficiency == "expert");
  const proficient = user?.skills?.filter(
    (skill) => skill.proficiency == "proficient"
  );
  const beginner = user?.skills?.filter(
    (skill) => skill.proficiency == "novice"
  );
  const interested = user?.skills?.filter(
    (skill) => skill.proficiency == "no-experience-interested"
  );

  return (
    <>
      <Header />
      {loading ? (
        <div className="flex justify-center mt-4">
          <h2 className="text-xl font-bold">Loading</h2>
        </div>
      ) : error ? (
        <div className="flex justify-center mt-4">
          <p className="text-2xl text-red-500">User not found</p>
        </div>
      ) : (
        <div className="min-h-screen text-theme px-3">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 mt-14 mb-4">
              <img
                className="w-full h-full object-top rounded-full"
                src={user?.picture}
                alt="Profile"
              />
            </div>
            <h1 className="font-bold text-3xl mb-8 text-blue-950">
              {user?.name}
            </h1>
          </div>

          <div className="font-light">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-theme text-2xl text-left mb-6 ml-2">
                Skills and Interests
              </h2>
              <Category skills={master} heading="Master/Influencer" />
              <Category skills={expert} heading="Expert" />
              <Category skills={proficient} heading="Proficient" />
              <Category skills={beginner} heading="Beginner" />
              <Category
                skills={interested}
                heading="No experience, but interested"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UserSkills;
