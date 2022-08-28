import React from 'react'

const LocationInfo = ({location}) => {
  return (
    <article className = 'location'>
        <div><h2>{location?.name}</h2></div>
        <div  className = 'info' >
         <span><strong> Type: </strong>{location?.type}</span>
         <span><strong> Dimension: </strong>{location?.dimension}</span>
         <span><strong> Population: </strong>{location?.residents.length}</span>
      
        </div>
       
            
    </article>
  )
}

export default LocationInfo