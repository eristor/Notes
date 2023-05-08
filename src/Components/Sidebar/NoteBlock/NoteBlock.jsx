import React from 'react'

import './NoteBlock.scss'

function NoteBlock({active, data, setActive, info}) {
  
  return (
    <div className={active.id === data.id ? 'NoteBlock Active': 'NoteBlock'} onClick = {() => {
      setActive(data);
    }}>
        <strong>{data.Title.slice(0, 25)}</strong>
        <div className='NoteBlock-blockinfo'>
           <span>{data.Date === info() ? data.Time : data.Date}</span>
           <span>{data.Text.slice(0, 20) + '...'}</span>
        </div>
    </div>
  )
}

export default NoteBlock