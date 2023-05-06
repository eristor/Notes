import React from 'react'

import './NoteBlock.scss'

function NoteBlock({active, data, setActive}) {

  const notes = Object.values(data.values)
  return (
    <div className={active === data.id ? 'NoteBlock Active': 'NoteBlock'} onClick = {() => {
      setActive(data.id);
    }}>
        <strong>{notes[1]}</strong>
        <div className='NoteBlock-blockinfo'>
           <span>{data.updated_at}</span>
           <span>{notes[0]}</span>
        </div>
    </div>
  )
}

export default NoteBlock