import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom'
import Products from './Components/Products';
import Product from './Components/Product';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/products' Component={Products} />
        <Route exact path='/products/:id' Component={Product} />
      </Routes>
    </>

  );
}

export default App;

