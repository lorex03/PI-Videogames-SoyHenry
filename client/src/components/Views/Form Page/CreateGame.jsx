//ver si pongo algun videito 
import style from "../Form Page/Form.module.css"
import { validation } from "./validation";
import { useState } from "react";
import {  useSelector, useDispatch } from 'react-redux';
import { createGame, displayState } from "../../../redux/actions";

import { useNavigate } from 'react-router-dom';

const CreateGame = () => {
    const dispatch = useDispatch();
    const genres = useSelector( state => state.genres );
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      name: '',
     released: '',
     imagen: '',
     rating: 0,
     platform: [],
     description: '',
     genres: [],
                   
   
   
    })

    const [ errors, setErros ] = useState({});

    const handleChangle = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
        setErros(validation({
            ...formData,
            [e.target.name] : e.target.value,
        }))
    }

    const handleOptionsClick = (e) => {
        const genreId = e.target.value;
        const upGenres = formData.genres || [];
        if(!upGenres.includes(Number(genreId))) {
            let result = [...upGenres,Number(genreId)];
            setFormData({
                ...formData,
                genres: result,
            })
        }
    }
   
    const handleSubmit = (e) => {
        e.preventDefault();

        if(errors.name) {
            alert(errors.name);
        }
        if(errors.imagen) {
            alert(errors.imagen);
        }
        if(errors.rating) {
            alert(errors.rating)
        }

        if(!errors.name && !errors.imagen && !errors.height && !errors.rating) {
            const game = {
                name: formData.name,
                imagen: formData.imagen,
                rating: formData.rating.toString(),
                genres: formData.genres,
                platform:formData.platform,
                description:formData.description,
                released:  formData.released
            } 
   
   
            dispatch(createGame(game)); 
            dispatch(displayState({
                all: true,
                api: false,
                create: false,
            }))
            navigate("/home");
        }
        
    }
   
    const handlePlatformChange = (event) => {
        const selectedOptions = Array.from(
          event.target.selectedOptions,
          (option) => option.value
        )
        setFormData({ ...formData, platforms: selectedOptions })
      }
   
    return(
    <div className={style.body}>
    
    <div>
    <h1>CREATE YOUR VIDEOGAME</h1>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Game name" value={formData.name} onChange={handleChangle}/>
                    <input type="text" name="imagen" placeholder="image url" value={formData.imagen} onChange={handleChangle}/>
                    <br />
                   
                   
                    <label><h2> Genres</h2> </label>
                    <select name="" id="" multiple>
                        {
                           Array.isArray(genres) && genres?.map( (genres, index) => {
                                return <option value={genres.id} key={index} name="genres" onClick={handleOptionsClick}>{genres.name}</option>
                            })
                        }
                    </select>
                    <ul>
                        {   
                            (Array.isArray(genres)) ?
                            formData.genres.map( id => {
                               return genres?.map( (genres, index) =>  (genres.id === id) ? <li key={index}>*{genres.name}</li> : null)
                            })
                            : null
                        }
     <label htmlFor="platforms">Platforms:</label>
        <select
          name="platforms"
          multiple
          value={formData.platforms}
          onChange={handlePlatformChange}
          required
        >
          <option value="Xbox One">Xbox One</option>
          <option value="Xbox 360">Xbox 360</option>
          <option value="Xbox">Xbox</option>
          <option value="PlayStation 5">PlayStation 5</option>
          <option value="PlayStation 4">PlayStation 4</option>
          <option value="PlayStation 3">PlayStation 3</option>
          <option value="PlayStation 2">PlayStation 2</option>
          <option value="PlayStation">PlayStation</option>
          <option value="Nintendo Switch">Nintendo Switch</option>
          <option value="Nintendo 3DS">Nintendo 3DS</option>
          <option value="Nintendo DS">Nintendo DS</option>
          <option value="Nintendo 64">Nintendo 64</option>
          <option value="Game Boy Advance">Game Boy Advance</option>
          <option value="Game Boy Color">Game Boy Color</option>
          <option value="Game Boy">Game Boy</option>
          <option value="GameCube">GameCube</option>
          <option value="SNES">SNES</option>
          <option value="NES">NES</option>
          <option value="PC">PC</option>
          <option value="Linux">Linux</option>
          <option value="iOS">iOS</option>
          <option value="PS Vita">PS Vita</option>
          <option value="PSP">PSP</option>
          <option value="Wii U">Wii U</option>
          <option value="Classic Macintosh">Classic Macintosh</option>
          <option value="Apple II">Apple II</option>
          <option value="Commodore / Amiga">Commodore / Amiga</option>
          <option value="Atari 7800">Atari 7800</option>
          <option value="Atari 5200">Atari 5200</option>
          <option value="Atari 2600">Atari 2600</option>
          <option value="Atari Flashback">Atari Flashback</option>
          <option value="Atari 8-bit">Atari 8-bit</option>
          <option value="Atari ST">Atari ST</option>
          <option value="Atari Lynx">Atari Lynx</option>
          <option value="Atari XEGS">Atari XEGS</option>
          <option value="Genesis">Genesis</option>
          <option value="SEGA CD">SEGA CD</option>
          <option value="SEGA 32X">SEGA 32X</option>
          <option value="SEGA Master System">SEGA Master System</option>
          <option value="Dreamcast">Dreamcast</option>
          <option value="3DO">3DO</option>
          <option value="Jaguar">Jaguar</option>
          <option value="Game Gear">Game Gear</option>
          <option value="Neo Geo">Neo Geo</option>
        </select>
         <span>{errors.platforms && errors.platforms}</span>






  </ul>
  
<label htmlFor="">Rating</label>

                    <input type="number" name="rating" className="number" value={formData.rating} onChange={handleChangle}/>
                   
                    <label htmlFor="released">Released</label>
          <input
            type="date"
            name="released"
            value={formData.released}
            onChange={handleChangle}/>
                   
                   
                   <label htmlFor="description">Description:</label>
        <br />
        <textarea
          name="description"
          rows="4"
          cols="50"
          value={formData.description}
          onChange={handleChangle}/>   
                   
                   
                   
                    <br />
                    <button type='submit'>CREATE</button>


                    </form>
  </div>
    
  <div>

  {
                        (errors.name || errors.name || errors.imagen  || errors.rating) 
                                        ?<div>
                                        </div>                                             
                                        :null
  }
 {
                        (errors.name) ? <span> <b>Name:</b> {errors.name}</span> : null
                    }
                    {
                        (errors.imagen) ? <span>  <b>Image:</b> {errors.imagen}</span> : null
                    }
                
                    {
                        (errors.rating) ? <span> <b>Rating:</b> {errors.rating}</span> : null
                    }
   

  </div>
    
    





  </div>
        
    )
    }
    
    export default CreateGame;


    //____________________________________________________________________
   // 📍 FORM PAGE |: en esta vista se encontrará 
 //  el formulario para crear un nuevo videojuego.
    //____________________________________________________________________

//Este formulario debe ser controlado completamente con JavaScritp. 
//No se pueden utilizar validaciones HTML,
 //ni utilizar librerías especiales para esto. 
//Debe contar con los siguientes campos:

//Nombre. = name 
//Imagen. = background image 
//Descripción. description
//Plataformas. platform 
//Fecha de lanzamiento. released
//Rating. rating 
    //____________________________________________________________________

//Posibilidad de seleccionar/agregar varios géneros en simultáneo.
    //____________________________________________________________________

//Botón para crear el nuevo videojuego.
    //____________________________________________________________________

//[IMPORANTE]: es requisito que el formulario de creación
 //esté validado sólo con JavaScript. 
    //____________________________________________________________________

 //Puedes agregar las validaciones que consideres. 
    //____________________________________________________________________

 //Por ejemplo: que el nombre del videojuego no pueda contener símbolos, 

 //o que el rating no pueda exceder determinado valor, etc.