import Login from "@/features/auth/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Login from "../features/auth/login"
// import Login from "@/features/auth/Login"
// import other pages...

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<div>Register</div>} />
        <Route path="*" element={<div>404 Page</div>} />
      </Routes>
    </BrowserRouter>
  )
}
