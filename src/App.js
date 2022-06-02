import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Main from './pages/Main';
import About from './pages/About';
import Edit from './pages/Edit';
import Nav from './components/Nav';
import Footer from './components/Footer';


function App() {
  const [bookmark, setBookmark] = useState(null);

  return (
    <div className="App">
      <Nav className="navbar" />
      <Routes>
        <Route path="/" element={<Main setBookmark={setBookmark}/>} />
        <Route path="/about/" element={<About />} />
        <Route path="/edit/:bookmark" element={<Edit bookmark={bookmark}/>} />
      </Routes>
      <Footer className="footer" />
    </div>
  );
}

export default App;
