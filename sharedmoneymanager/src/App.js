import './App.css';
import { Outlet } from 'react-router-dom';
import MainMenu from './SharedUtilities/MainMenu/MainMenu';


function App() {
  return (
    <div>
    <MainMenu/>
    <Outlet/>
    </div>
  );
}

export default App;
