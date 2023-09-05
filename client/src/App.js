import './App.css';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Landing from './components/Landing Page/Landing'
import Home from './components/Home Page/Home'
import Detail from './components/Detail Page/Detail'
import CreateGame from './components/Form Page/CreateGame'
//IMPORTO MIS PAGINAS PRINCIPALES Q MOSTRARE EN MI FRONTEND

function App() {
  return (
    <div className="App">
      <h1>Henry Videogames</h1>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/createGame' element={<CreateGame/>} />
    
      </Routes>







    </div>
  );
}

export default App;
 // <Route path='*' element={ <Error404 />} />