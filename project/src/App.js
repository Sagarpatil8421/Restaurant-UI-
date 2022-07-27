
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import RestaurantDetails from './Components/Details/RestaurantDetails';

function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:rName' element={<RestaurantDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
