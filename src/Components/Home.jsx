import React from 'react'
import './style.css'
import copyIcon from '../assets/icon.svg'

function Home() {
  return (
    <div className='container'>
        <h2 className='title'>Password Generator</h2>
        <div className="password-wrapper">
            <div className="password-area">
                <div className="className">
                    <input type="text" disabled/>
                    <img src={copyIcon} alt='copyIcon' className='copyIcon' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home