import SearchBar from '../SearchBar/SearchBar.jsx';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styleNav from './Nav.module.css';

export default function Nav(props) {
	const { onSearch, random, deleteAll } = props;
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	}

	return(
		<div className={styleNav.container}>
			<button className={styleNav.menuButton} onClick={toggleMenu}>
				<i className="fa fa-bars" />
			</button>
			<ul
				className={`${styleNav.UList} ${
				isMenuOpen ? styleNav.UListOpen : ''
				}`}
				id="MyUList"
				>
				<li className={styleNav.ListItem} > 
					<button className={styleNav.ListItemButton} onClick={deleteAll} >Borrar todos</button>
				</li>
				<li className={styleNav.ListItem}>
					<button className={styleNav.ListItemButton} onClick={random} >Personaje aleatorio</button>
				</li>
				<li className={styleNav.ListItemLink}>
					<NavLink to="/home" className={({isActive}) => isActive ? styleNav.active : styleNav.disable}>
						Home
					</NavLink>
					<NavLink to="/about" className={({isActive}) => isActive ? styleNav.active : styleNav.disable}>
						About
					</NavLink>
					<a className={styleNav.ListItemContacto} href="#CONTACTO">
						Contacto
					</a>
					<NavLink to='/' className={({isActive}) => isActive ? styleNav.active : styleNav.disable}>
						Logout	
					</NavLink>
				</li>
			</ul>
			<div className={styleNav.SearchContainer} >
				<SearchBar onSearch={onSearch} />
			</div>
		</div>
	);
}