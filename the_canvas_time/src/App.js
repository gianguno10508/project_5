import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './component/body/Home';
import Lifestyle from './component/body/Lifestyle';

function App() {
  return (
    <div className="App">
      <Header />
      <Lifestyle />
      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
