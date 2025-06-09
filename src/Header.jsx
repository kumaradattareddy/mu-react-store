import React from 'react'
import "./Header.css"

export default function Header(className) {
  return (
    <div className='App-Header-Row'>
    <div><h1></h1></div>    
    <div>
        <ul>
            <li>
                Home
            </li>
            <li>
                login
            </li>
        </ul>
    </div>
    </div>
  )
}
