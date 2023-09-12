import './App.css';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Landing from './components/Views/Landing Page/Landing'
import Home from './components/Views/Home Page/Home'
import Detail from './components/Views/Detail Page/Detail'
import CreateGame from './components/Views/Form Page/CreateGame'
import Error404 from './components/Error 404/Error404';
import Navbar from './components/Navbar/Navbar';
import { useDispatch } from 'react-redux';
import SearchAndFilter from './components/SearchAndFilters/SearchAndFilter'
//import SearchAndFilter from './components/SearchAndFilters/SearchAndFilter';
//IMPORTO MIS PAGINAS PRINCIPALES Q MOSTRARE EN MI FRONTEND
import {getGames,getGenres,setCurrentPage} from './redux/actions'

function App() {

  let location = useLocation();
  let navigate = useNavigate();
  const dispatch = useDispatch();


  const login = () => {
    navigate("/home");
  }
  //! Usamos el useEffect para que cada vez que se recargue la pagina, me traiga todos los perros de la api con getGames
  useEffect( () => {
    //! Me va a traer todos los videojuegos siempre y cuando sea la url "/home"
    if(location.pathname === "/home" || location.pathname === "/createGame") {
      dispatch(getGenres());
    //  dispatch(getPlatforms());
      dispatch(setCurrentPage(1));
    }
 
    

    if(location.pathname === "/home") {
        dispatch(getGames()); 
        dispatch(setCurrentPage(1));       
    }
}, [dispatch,location.pathname] )




  return (
    <div className="App">
      <h1>Henry Videogames</h1>
      {
        (location.pathname !== '/') ? <Navbar />: null
      }
      {
        (location.pathname !== '/' && location.pathname !== '/createGame' && !location.pathname.startsWith('/detail/')) ? <SearchAndFilter /> : null
      }
   

      <Routes>
        <Route path='/' element={<Landing login={login}/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/createGame' element={<CreateGame/>} />
        <Route path='*' element={ <Error404 />} />
      </Routes>
|


    </div>
  );
}

export default App;
 // <Route path='*' element={ <Error404 />} />