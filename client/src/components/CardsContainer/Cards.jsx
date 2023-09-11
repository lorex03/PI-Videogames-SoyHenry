import Card from "../Card/Card"
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from "../../redux/actions";
import style from "../CardsContainer/Cards.module.css"

const Cards = ({games}) => {
  const dispatch = useDispatch();

  const currentPage = useSelector( state => state.paginate.currentPage );

  const itemsPage = useSelector( state => state.paginate.itemsPage );

  //!Estado inicial del index para los items de mis dogs en la paginación (todo depende de mi current page)

  const startIndex = (currentPage - 1) * itemsPage;

  //!Donde va a terminar mis items de dogs para la paginación (todo depende de mi current page)

  const endIndex = startIndex + itemsPage;

  //! hago un slice para que me entregue un nuevo array con los perros que requiero por paginate
  const gamesPaginate = games.slice(startIndex,endIndex);

  //! Aquí me da el total de paginas que debe tener mi page.
  const allPages = Math.ceil(games.length / itemsPage);



  const handlePreviusPg = () => {

      if(currentPage > 1) dispatch(setCurrentPage(currentPage - 1));
  
  }


  const handleNextPg = () => {
      if(currentPage < allPages) dispatch(setCurrentPage(currentPage + 1));

  }
  return (
    <div>
       <div className={style.cards}>
            
            {

           gamesPaginate.map( (game,index) => {
                    return (
                        <Card key={index}
                            id={game.id}
                            name={game.name}
                            background_image={game.background_image}
                            platforms={game.platforms}
                            description={game.description}
                            released={game.released}
                            rating={game.rating}
                            genres={game.genres}

                        />
                    )
                })
            }
        

       
    </div>
     <div className={style.button}>
            <button onClick={handlePreviusPg} disabled={currentPage === 1}>previus</button>
            <label>{currentPage}</label>
            <button onClick={handleNextPg} disabled={currentPage === allPages}>Next</button>
        </div>
        </div>
)
    
  
      
}
  export default Cards;