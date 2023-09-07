import style from "./Card.module.css"


import { getGamesById } from "../../redux/actions";

import { useDispatch } from 'react-redux';
const Card = ({id, background_image, name,genres}) => {

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

                    
                        {   
                            genres?.map( (element,index) => {
                                return (index <= 3) ? <p key={index}>{element}</p> : null
                            })
                        }
                    </div>

                    <div className={style.det}>
                        <div to={`/detail/${id}`} >
                            <p onClick={clickDetail}> {`>`} </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


export default Card;