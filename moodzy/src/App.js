import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header"
import './App.css';
import Home from "./components/Home";
import Details from "./components/Details";
import Collab from "./components/Collab";
import VideoJS from "./components/VideoJS";
import Marvel from "./components/Marvel";
import Disney from "./components/Disney";
import Pixar from "./components/Pixar";
import NatGeo from "./components/NatGeo";
import StarWar from "./components/StarWar";

function App() {
  return (
    <div className="App">
      <Router>
        <Header element={<Header />}/>
        <Routes> {/*In react-router-dom v6, "Switch" is replaced by routes "Routes". */}
          <Route exact path="/" element={<Login />}></Route>
          <Route path ='/home' element={<Home/>}></Route> 
          <Route path ='/disney' element={<Disney/>}></Route> 
          <Route path ='/pixar' element={<Pixar/>}></Route> 
          <Route path ='/marvel' element={<Marvel/>}></Route> 
          <Route path ='/star-war' element={<StarWar/>}></Route> 
          <Route path ='/national-geographic' element={<NatGeo/>}></Route> 
          <Route path ='/detail/:id' element={<Details/>}></Route>
          <Route path ='/collab/' element={<Collab/>}></Route>
          <Route path ='/player' element={<VideoJS/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
