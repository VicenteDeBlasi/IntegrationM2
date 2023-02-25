import React, { useState } from 'react';
import SBstyle from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {

const [character, setCharacter] = useState("");

	const handleChange = (e) => {
	setCharacter(e.target.value)
	};

	const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(character);
  	};

  return (
    <>
      <form onSubmit={handleSubmit} >
          <input className={SBstyle.SearchSite} type='search' onChange={handleChange} placeholder="Buscar"/>
          <button type="submit">Agregar</button>
      </form>
    </>
  );
}