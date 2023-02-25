import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx';
import Form from './components/Form/Form.jsx'


function App () {
  const [characters, setCharacters] = useState ([]);
  const location = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  var username = 'vicentedb67@gmail.com';
  var password = 'Cacona123.';

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/');
    }
  }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => {
     if (data.name) {
      const existe = characters.some((personaje) => personaje.id === data.id)
      if (existe) {
        window.alert('Ya existe este personaje')
      } else {
        setCharacters((prevChars) => [...prevChars, data]);
      }
    } else {
      window.alert('No hay personajes con ese ID');
    }
  });
  }

  function onClose(id) {
    setCharacters(characters.filter((character) => character.id !== id))
  }

  function random() {
    var numeroAleatorio = Math.floor(Math.random() * 826) +1;
    onSearch(numeroAleatorio)
  }

  function deleteAll() {
    setCharacters([])
  }

  useEffect(()=>{
    !access && navigate('/');
  }, [access])
  
  return (
    <div className='App' style={{ padding: '0px' }}>
      {location.pathname === '/' ? <Form login={login}/> : <header style={{position:"sticky",top:"0px"}}> <Nav onSearch={onSearch} random={random} deleteAll={deleteAll} /></header>}
      <Routes>
        <Route path="/" element={<Cards characters={characters} onClose={onClose}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
      <div>
        <Footer />
      </div>  
      </div>
      )
}

export default App
