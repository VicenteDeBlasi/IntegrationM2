import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './Detail.module.css';

export default function Detail () {
	const { detailId } = useParams();
	const [character, setCharacter] = useState({});
	
	useEffect(() => {
  fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
    .then((response) => response.json())
    .then((char) => {
      if (char.name) {
        setCharacter(char);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    })
    .catch((err) => {
      window.alert("No hay personajes con ese ID");
    });
  return setCharacter({});
  }, [detailId]);

	return(
		<div className={styles.Container} >
      <div className={styles.VolverContainer} >  
        <Link className={styles.VolverLink} to="/home">
          <button className={styles.Volver} >VOLVER</button>
        </Link> 
      </div>
      <div className={styles.DetailsContainer} >
        <div className={styles.DetailsIMNAContainer} >
          <img className={styles.DetailsImg} src={character.image} alt="foto" />
          <div className={styles.nameContainer}>  
            <h1>{character.name}</h1>
		      </div>
        </div>
        <div className={styles.DetailTextContainer} >
          <h2>Status: {character.status}</h2>
          <h2>Species: {character.species}</h2>
          <h2>Gender: {character.gender}</h2>
          <h2>Origin: {character.origin?.name}</h2>
        </div>
      </div>
    </div>
	);
}