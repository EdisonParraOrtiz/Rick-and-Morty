import React from 'react'
import useFetch from '../hooks/useFetch'

const CardResident = ({url}) => {

  const resident = useFetch(url)

  return (
    <article className = 'card'>
      <header>
          
          <span className='span'>{resident?.status} <div className={resident?.status}></div></span>
          <img src={resident?.image} alt={`image of ${resident?.name}`} />
      </header>

      <div className = 'description'>
        <h3>{resident?.name}</h3>
        <ul>
          <li><span>Species:</span>{resident?.species}</li>
          <li><span>Origin:</span>{resident?.origin.name}</li>
          <li><span>Episodes where appear:</span>{resident?.episode.length}</li>
        </ul>
      </div>
    </article>
  )
}

export default CardResident