import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./Pages/Dashboard"
import Users from "./Pages/Users"
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/users" element={<Users/>}/>
      </Routes>      
    </BrowserRouter>
  )
}