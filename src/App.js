import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Edit from './pages/Edit';
import Nav from './components/Nav';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Nav className="navbar" />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about/" element={<About />} />
        <Route path="/edit/:title" element={<Edit />}/>
      </Routes>
      <Footer className="footer" />
    </div>
  );
}

export default App;
