import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Clube from './components/Clube';
import Header from './components/comps_p/Header';
import Home from './components/Home';
import Socios from './components/Socios';
import Modalidades from './components/Modalidades';
import Info from './components/Info.jsx';
import Galeria from './components/Galeria';
import Loja from './components/Loja';
import Carrinho from './components/Carrinho';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/clube" element={ <Clube /> } />
            <Route path="/socios" element={<Socios />} /> 
            <Route path="/modalidades" element={<Modalidades />} /> 
            <Route path="/info" element={<Info />} /> 
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/loja" element={<Loja />} />
            <Route path="/carrinho" element={<Carrinho />} />
          </Routes>          
        
      </div>
    </BrowserRouter>
  );
}

export default App;
