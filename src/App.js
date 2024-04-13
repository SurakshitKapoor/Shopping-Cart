
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      App Component

      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />}> </Route>
        <Route path='/cart' element={<CartPage />}></Route>
      </Routes>


    </div>
  );
}

export default App;
