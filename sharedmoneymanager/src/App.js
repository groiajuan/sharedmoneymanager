import './App.css';
import LoginForm from './Login/LoginForm';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div>
    <LoginForm/>
    <Outlet/>
    </div>
  );
}

export default App;
