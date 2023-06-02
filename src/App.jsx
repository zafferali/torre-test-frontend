import Home from "./pages/Home";
import UserSkills from "./pages/UserSkills";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<UserSkills />} />
    </Routes>
  );
}

export default App;
