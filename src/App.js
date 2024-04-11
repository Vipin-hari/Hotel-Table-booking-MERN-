import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';
import Reservation from './Components/Reservation';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter >
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/menu' element={<Menu />} />
      <Route path='/reservations' element={<Reservation />} />
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
