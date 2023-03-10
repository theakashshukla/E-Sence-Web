import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import RegisterPage from './pages/Signup'
import Dashboard from "./pages/Dashboard"


export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterPage />}>
            <Route index element={<Dashboard />} />
            <Route path="/login" element={<LoginPage />} />
            
      
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
