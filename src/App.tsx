import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProfileEdit from "./pages/Profile/Edit";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/events" element={<Events />}/>
        <Route path="/auth/sign-in" element={<Login />}/>
        <Route path="/auth/sign-up" element={<Signup />}/>
        <Route path="/profile/edit" element={<ProfileEdit/>}/>
        {/* add new routes here */}
      </Routes>
    </BrowserRouter>
  )
}