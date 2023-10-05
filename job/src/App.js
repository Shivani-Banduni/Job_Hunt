import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Basiccard from './components/Basiccard';

import Layout from './components/Layout';


function App() {
  return (
    <div className="App">
     <Navbar/>
     {/* <Basiccard/> */}
     <Layout/>
    </div>
  );
}

export default App;
