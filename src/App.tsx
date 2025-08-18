import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProfileEdit from "./pages/Profile/Edit";
import MyProfile from "./pages/Profile/MyProfile";

export default function App() {
  return (
    <BrowserRouter>
      {/* Toast container global */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/events" element={<Events />}/>
        <Route path="/auth/sign-in" element={<Login />}/>
        <Route path="/auth/sign-up" element={<Signup />}/>
        <Route path="/profile/edit" element={<ProfileEdit />}/>
        <Route path="/profile/me" element={<MyProfile />}/>
      </Routes>
    </BrowserRouter>
  );
}
