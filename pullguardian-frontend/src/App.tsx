import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// import LoginPage from "@/pages/LoginPage"
import Login from "@/features/auth/Login"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Add more routes here as you build more pages */}
      </Routes>
    </Router>
  )
}

export default App
