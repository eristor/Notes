import React from 'react'
import './Search.scss'

function Search({search, handleSearch}) {
  return (
    <input className='Search' type='text' placeholder="&#x1F50E; Пошук..." value={search} onChange={(e) => handleSearch(e)}>
        
    </input>
  )
}

export default Search