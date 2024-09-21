import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import DeleteUser from "./pages/DeleteUser";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/Delete" element={<DeleteUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
