
import Navbar from './components/navbar/Navbar';
import Homepage from './pages/home_page/Homepage';
import {Routes, Route} from "react-router-dom"
import Puppy from './pages/puppy_page/Puppy.jsx';
import Search from './pages/search_page/Search';
function App() {
  return (
    <div className="App">
          <Navbar></Navbar>
          
          <Routes>
            <Route path="/" element={<Homepage></Homepage>} ></Route>
            <Route path="/puppy" element={<Puppy></Puppy>} ></Route>
            <Route path="/search" element={<Search></Search>} ></Route>
          </Routes>

    </div>
  );
}

export default App;
