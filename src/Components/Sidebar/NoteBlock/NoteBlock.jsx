import React from 'react'

import './NoteBlock.scss'

function NoteBlock({active}) {
  return (
    <div className={active ? 'NoteBlock Active': 'NoteBlock'}>
        <strong>ASDfasdfasdfasdfasd</strong>
        <div className='NoteBlock-blockinfo'>
           <span>Time</span>
           <span>pice of text</span>
        </div>
    </div>
  )
}

export default NoteBlock