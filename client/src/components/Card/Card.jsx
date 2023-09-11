import style from "./Card.module.css"

//import { Link } from "react-router-dom";
import { getGamesById } from "../../redux/actions";

import { useDispatch } from 'react-redux';
import { Link, NavLink } from "react-router-dom";
const Card = ({id, background_image, name,genres,rating}) => {

    const dispatch = useDispatch();

    const clickDetail = () => {
        dispatch(getGamesById(id));
    }

        return (
            <div className={style.img}>
       <img src ={background_image}/>

                <div>
                    <div className={style.cardcontainer}>
           
                    </div>

<div className={style.gen}>
                    <h1>{name}</h1>
<h2>Rating:{rating}</h2>


<h2>Genres:</h2>          
                        {   
                            genres?.map( (element,index) => {
                                return (index <= 3) ? <p key={index}>{element}</p> : null
                            })
                        }
                       
                    
                       

                    </div>

                    <div className={style.det}>
                    <Link to={`/detail/${id}`}>
       <button type='submit' onClick={clickDetail}> {`>`}</button>
    </Link>
 
                     
                       
          </div>
       </div>
     </div>
        )
    }


export default Card;


//  DEBERIA SI QUIERO QUE MUESTRE PLATFORMS EN 
// {   
  //   platforms?.map( (element,index) => {
   //      return (index <= 3) ? <p key={index}>{element}</p> : null
 //    })
// }