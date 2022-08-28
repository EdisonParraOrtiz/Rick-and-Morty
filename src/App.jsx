import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import LocationInfo from './components/LocationInfo'
import useFetch from './hooks/useFetch'
import Rick from '../public/Images/header_Rick and Morty.png'

function App() {

  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {

   let numberLocation 
   if (searchInput ===  ''){
    numberLocation = Math.floor(Math.random() * (126 - 1) + 1 )
   }else{
    numberLocation = searchInput
   }

    const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`
    axios.get(URL)
     .then(res => setLocation(res.data))
     .catch(err => console.log(err))
   
  }, [searchInput])
  

  // Busqueda por input

  const handleSubmit = e => {
    e.preventDefault()
    setSearchInput(e.target.search.value);
  }

    
  return (
    <div className="App">
      <div className = 'contendor-image'>
        <img className = 'image' src={Rick} />
      </div>
      <form className = 'contendor-formulario' onSubmit={handleSubmit}>
        <input className = 'contendor-input' id='search' type="text"  placeholder='Digite un número'  />
        <button>Search</button>
      </form>
      <LocationInfo  location = {location} />
      <div className='container'>
          {
            location?.residents.map(url => (
              <CardResident 
                key ={url}
                url ={url}
              />
            ))
          }
        </div>
      
       

      
    </div>
  )
}

export default App
