//ver si pongo algun videito 
import style from "../Form Page/Form.module.css"
import { validation } from "./validation";
import { useEffect, useState } from "react";
import {  useSelector, useDispatch } from 'react-redux';

import { createGame, displayState,getPlatforms } from "../../../redux/actions";

import { useNavigate } from 'react-router-dom';

const CreateGame = () => {
    
    const dispatch = useDispatch();
    //el hook useDispatch para enviar acciones a Redux y cuando se envía el formulario, 
    //se llama a la función createGame para crear un nuevo juego en mi servidor 
    const genres = useSelector( state => state.genres );
    
    const platforms = useSelector( (state) => state.platforms );
    // traigo el useSelector para obtener los géneros 
    //y las plataformas del estado global de Redux 
    const navigate = useNavigate();

useEffect(() => {

    dispatch(getPlatforms())
}, [dispatch])


    const [formData, setFormData] = useState({
      name: '',
     released: '',
     background_image: '',
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

    const handleOptionsGenClick = (e) => {
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
   

    

    const handleSelectPlatforms = (event) => {
        const property = event.target.name;
        const value = event.target.value.toUpperCase();
        setErros(validation({ ...formData, [property]: value }));
        setFormData({
          ...formData,
          platforms: [...formData.platforms, event.target.value],
        });
     };
 // La función utiliza event.target.name y event.target.value para obtener el nombre y
 // el valor de la plataforma seleccionada. 
 //Luego, utilizara la función validation que creo para validar los datos del formulario

     
     const handleDeletePlatforms = (e) => {
       e.preventDefault();
       setFormData({
         ...formData,
         platforms: formData.platforms.filter((platform) => platform !== e.target.value),
       });
     };




    const handleSubmit = (e) => {
        e.preventDefault();

        if(errors.name) {
            alert(errors.name);
        }
       //background_image
        if(errors.background_image) {
            alert(errors.background_image);
        }

        if(errors.rating) {
            alert(errors.rating)
        }

        if(!errors.name && !errors.background_image && !errors.rating) {
            const game = {
                name:  formData.name,
                background_image: formData.background_image,//background_image
                rating: formData.rating,
                genres: formData.genres,
                platforms:formData.platforms,
                description:formData.description,
               released:  formData.released
           } 
            const gameJson = JSON.stringify(game);
   
            dispatch(createGame(gameJson)); 
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
                    <input  type="text" name="name" placeholder="Game name" value={formData.name} onChange={handleChangle}/>
                    <input type="text" name="background_image" placeholder="image url" value={formData.background_image} onChange={handleChangle}/>
                    <br />
                   
                   
     <label className={style.goku}><h2 className={style.g}> Genres</h2> </label>
                    <select  name="" id="" multiple>
                        {
                           Array.isArray(genres) && genres?.map( (genres, index) => {
                                return <option value={genres.id} key={index} name="genres" onClick={handleOptionsGenClick}>{genres.name}</option>
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



  </ul>
  <div className={style.select}>
                <label className={style.g} htmlFor="platforms"><h2> Platforms:</h2></label>
                <select className={style.sel}
                
                  name="platforms"
                  size={1}
                  onChange={(e) => handleSelectPlatforms(e)}
                >
                  {/* <option selected>Platform</option> */}
                  {platforms.map((p, i) => (
                    <option key={i} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
                {errors.platforms1 ? (
                  <p className={style.p}>{errors.platforms1}</p>
                ) : (
                  <p className={style.p}>{errors.platforms2}</p>
                )}
                <p>Platforms:</p>
                <div>
                  {formData.platforms?.map((platform, i) => {
                    return (
                      <span key={i}>
                        {platform}
                        <button
                          value={platform}
                          onClick={(e) => handleDeletePlatforms(e)}
                        >
                          X
                        </button>
                      </span>
                    );
                  })}
                </div>
          
              </div>
              <br />



<label className={style.count}  htmlFor="">Rating</label>

                   <div className={style.cont}> <input  type="number" name="rating" className={style.pepe} value={formData.rating} onChange={handleChangle}/></div>
                   


                    <label className={style.rel} htmlFor="released">Released</label>
          <input className={style.se}
            type="date"
            name="released"
            value={formData.released}
            onChange={handleChangle}/>
                   
                   
                   <label className={style.des} htmlFor="description">Description:</label>
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
                        (errors.name || errors.name || errors.background_image  || errors.rating) 
                                        ?<div>
                                        </div>                                             
                                        :null
  }
 {
                        (errors.name) ? <span> <b>Name:</b> {errors.name}</span> : null
                    }
                    {
                        (errors.background_image) ? <span>  <b>Image:</b> {errors.background_image}</span> : null
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
