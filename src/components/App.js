import './App.css';
import React, { useState } from 'react';
import Header from './header';
import Home from './home';
import About from './about';
import Menu from './menu';
import Modal from './modal';
import { useEffect } from 'react';


function App() {

  const [home, showHome] = useState(true);
  const [menu, showMenu] = useState(false);
  const [about, showAbout] = useState(false);
  const [modal,showModal] = useState(false)
  const [meals,setMeals] = useState([])
  const [loading,setLoading] = useState(true)
  const [meal,setMeal] = useState([])
  const [text,setText] = useState('')
  const [search,setSearch] =useState('')

  const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=b'

  const fetchData = async (url) => {
    try {
      const request = await fetch(url);
      const data = await request.json();
      setMeals(data.meals)
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  };


  useEffect(() => {
    fetchData(allMealsUrl);
  }, []);


  const NavigateHome = () => {
    showHome(true)
    showMenu(false)
    showAbout(false)
    showModal(false)
    document.body.style.background='rgba(0, 0, 0, 0.85) url(https://wallpaperaccess.com/full/3692740.jpg)'
    document.body.style.backgroundBlendMode='darken'
    document.body.style.backgroundSize='cover'
    document.body.style.backgroundRepeat='no-repeat'
  }

  const NavigateMenu = () => {
    showMenu(true)
    showHome(false)
    showAbout(false)
    document.body.style.background = 'burlywood'
  }

  const NavigateAbout = () => {
    showMenu(false)
    showHome(false)
    showAbout(true)
    showModal(false)
    document.body.style.background='rgba(0, 0, 0, 0.85) url(https://wallpaperaccess.com/full/3692740.jpg)'
    document.body.style.backgroundBlendMode='darken'
    document.body.style.backgroundSize='cover'
    document.body.style.backgroundRepeat='no-repeat'

  }

  const viewMore = (name) => {
    let meal = meals.find(meal => meal.strMeal == name)
    setMeal(meal)
    showModal(true)
  }

  const closeModal = () => {
    showModal(false)
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const searchMeal = (e) => {
    e.preventDefault();
    setSearch(text);
  };
  
  useEffect(() => {
      const searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
      fetchData(searchUrl);
  }, [search]);
  
  return (
    <div>
      <Header NavigateMenu={NavigateMenu} NavigateAbout={NavigateAbout} NavigateHome={NavigateHome} home={home} about={about} menu={menu} modal={modal}/>
      {home && <Home NavigateMenu={NavigateMenu} />}
      {menu && <Menu meals={meals} viewMore={viewMore} loading={loading} modal={modal} searchMeal={searchMeal} handleChange={handleChange}/>}
      {modal && <Modal meal={meal} closeModal={closeModal}/>}
      {about && <About />}
    </div>
  );
}

export default App;
