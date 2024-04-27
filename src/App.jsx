import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "./pages/userPage";
import AdminPage from "./pages/adminPage";

//vs code line 3

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element ={<UserPage />}/>
      <Route  path="/admin" element ={<AdminPage />}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
