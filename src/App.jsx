import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "./pages/userPage";
import AdminPage from "./pages/adminPage";
import Login from "./pages/Login";

//vs code line 3

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element ={<UserPage />}/>
      <Route  path="/admin" element ={<Login />}/>
      <Route  path="/admincrud" element ={<AdminPage />}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
