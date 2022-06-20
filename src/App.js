import './App.css';
import Home from './component/Home/Home';
import {BrowserRouter,Routes,Route, Router} from 'react-router-dom';
import Blog from './component/Blog/Blog';
import Form1 from './component/Form/Form'
import GetListed from './component/GetListed/GetListed';
import  KidzAppTv from './component/KidzappTV/KidappAppTV';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
      <Route path="/" element={<Home/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/getInTouch" element={<Form1/>}/>
          <Route path="/getlist" element={<GetListed/>}/>
          <Route path="/kidzappTv" element={< KidzAppTv/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
