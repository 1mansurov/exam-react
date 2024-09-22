import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import DeleteUser from "./pages/DeleteUser";
import CreateUserForm from "./pages/CreateUserForm";
import NewPostForm from "./pages/NewPostForm";
import SingleUser from "./pages/SingleUser";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/delete-user" element={<DeleteUser />} />
          <Route path="/create-user" element={<CreateUserForm />} />
          <Route path="/new-post" element={<NewPostForm />} />
          <Route path="single-user/:id" element={<SingleUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
