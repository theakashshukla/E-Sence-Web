import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import RegisterPage from './pages/Signup'



export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
           <Route path="/login" element={<LoginPage />} />
            
      
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
