import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import About from './pages/About'
import Nav from './component/Nav'
import Product from './pages/Product';
import Contact from './pages/Contact';
import Service from './pages/Service';




function App() {
  return (
    <div className="App">
      <Router>
      <Nav />
      <Routes>
      
      <Route path="/" element={<Home />}/>
          <Route path='/about' element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
