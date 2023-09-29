import './App.css';
import Home from './components/Home';
import Products from './components/Products';
import Navigbar from './components/Navigbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from "./data.json"

function App() {
  return (
   <div>

    <Navigbar />

    <Home />
    <Products data={data} />

    </div>
  );
}

export default App;
