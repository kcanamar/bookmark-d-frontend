import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Nav className="navbar" />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer className="footer" />
    </div>
  );
}

export default App;
