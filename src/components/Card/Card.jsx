import { Link } from 'react-router-dom'
import style from './Card.module.css'

	export default function Card({ detailId, name, species, gender, image, onClose }) {
   return (
      <>
      	<div className={style.CardContainer} >
            <div className={style.TopDiv} >   
               <button className={style.ButtonClose} onClick = {onClose} >X</button>
               <Link to={`/detail/${detailId}`} className={style.Link} >
                  <h2 className={style.MoreInfo} >info</h2>
               </Link>
            </div>
               <h2 className={style.info} >{name}</h2>
               <img className={style.ImgChar} alt={name} src={image}/>
               <h2 className={style.info} >Species: {species}</h2>
               <h2 className={style.info} >Gender: {gender}</h2>
         </div>
      </>
   );
}
