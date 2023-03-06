import SignupPage from './pages/Signup';
import SigninPage from './pages/Signin';
import Navbar from './pages/Navbar';
import { ProSidebarProvider } from 'react-pro-sidebar';
import './App.css';



function App() {

  return (
    <div className='App'>
      
      <ProSidebarProvider>
        <Navbar />
      </ProSidebarProvider>

    </div>
  );
}
export default App;
