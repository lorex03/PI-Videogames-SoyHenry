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
    const platforms = useSelector( state => state.platforms );
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      name: '',
     released: '',
     imagen: '',
     rating: 0,
     platforms: [],
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
                platforms:formData.platforms,
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




   <label><h2> Platforms</h2> </label>
                    <select name="" id="" multiple>
                        {
                           Array.isArray(platforms) && platforms?.map( (platforms, index) => {
                                return <option value={platforms.id} key={index} name="platforms" onClick={handleOptionsClick}>{platforms.name}</option>
                            })
                        }
                    </select>
                    <ul>
                        {   
                            (Array.isArray(platforms)) ?
                            formData.platforms.map( id => {
                               return platforms?.map( (platforms, index) =>  (platforms.id === id) ? <li key={index}>*{platforms.name}</li> : null)
                            })
                            : null
                        }





  </ul>
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