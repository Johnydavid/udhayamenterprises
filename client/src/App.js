import './App.css';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import Navigbar from './components/Navigbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from "./Data.json";
import { Routes, Route } from "react-router-dom";




function App() {
  return (
   <div>

<Navigbar />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/home" exact element={<Home />}></Route>
        <Route path="/products" exact element={<Products  data = {data} />}></Route>
        <Route path="/contact" exact element={<Contact/>}></Route>
                </Routes>

   


    </div>
  );
}

export default App;
