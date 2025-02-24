import Login from "./Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signin from "./Signin"

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signin" element={<Signin/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
