// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Test from './components/Test';
import Odi from './components/Odi'
import T20 from './components/T20'

import backgroundImage from './images/cricket2.jpg'

const Routing = () => {
  return(
    <Routes>
      <Route exact path="/test" element = {<Test />}/>
      <Route exact path="/odi" element = {<Odi />}/>
      <Route exact path="/t20" element = {<T20 />}/>
    </Routes>
  )
}





function App() {
  return (
    <div style={{
      backgroundImage:`url(${backgroundImage})`
    }}>
      <Navbar/>
      <Routing/>
    </div>
  );
}

export default App;
