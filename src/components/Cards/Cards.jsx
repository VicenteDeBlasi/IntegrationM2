import Card from '../Card/Card';
import Cstyle from './Cards.module.css'

export default function Cards({ characters, onClose }) {
   return (<div className={Cstyle.container} >
   	{
         characters.map((character) => 
           <Card key = {character.id}
              name = {character.name}
              species = {character.species}
              gender = {character.gender}
              image = {character.image}
              detailId = {character.id}
              onClose = {() => onClose(character.id)} 
              />)
         }
         </div>
         );
}
