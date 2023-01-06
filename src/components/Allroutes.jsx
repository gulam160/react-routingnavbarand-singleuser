import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/about";
import Contact from "../Pages/contact";
import Users from "../Pages/users";
import Login from "../Pages/Login";
import SingleUserPage from "../Pages/SingleUserPage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/users" element={<Users />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users/:user_id" element={<SingleUserPage />} />
    </Routes>
  );
}
export default AllRoutes;
