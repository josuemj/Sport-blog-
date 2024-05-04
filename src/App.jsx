// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UserPage from "./pages/userPage";
import AdminPage from "./pages/adminPage";
import Login from "./pages/Login";
import { AuthProvider, useAuth } from './AuthContext';

function PrivateRoute({ element }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/admin" />;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserPage />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/admincrud" element={<PrivateRoute element={<AdminPage />} />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
