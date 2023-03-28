import React from 'react'
import './style.css'
import copyIcon from '../assets/icon.svg'

function Home() {
  return (
    <div className='container'>
        <h2 className='title'>Password Generator</h2>
        <div className="password-wrapper">
            <div className="password-area">
                <div className="password">
                    <input type="text" disabled/>
                    <img src={copyIcon} alt='copyIcon' className='copyIcon' />
                </div>
            </div>
        </div>
        <div className="setting">
            <h3>Customize your password</h3>
            <div className="customize">
                <div className="checkboxes">
                    <div className="left">
                        <div className="checkbox-field">
                        <input type="checkbox" name="lower" id="lower" />
                        <label htmlFor='lower'>Include lower case(a-z)</label>
                        </div>
                        <div className="checkbox-field">
                        <input type="checkbox" name="upper" id="upper" />
                        <label htmlFor='upper'>Include upper case(A-Z)</label>
                        </div>
                    </div>
                    <div className="right">
                        <div className="checkbox-field">
                        <input type="checkbox" name="numbers" id="numbers" />
                        <label htmlFor='numbers'>Include numbers(0-9)</label>
                        </div>
                        <div className="checkbox-field">
                        <input type="checkbox" name="symbols" id="symbols" />
                        <label htmlFor='symbols'>Include symbols(!-*)</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="password-length">
            <h3>Password Length</h3>
            <div className="slider">
                <p className="rangeValue">10</p>
                <div className="range">
                    <input type="range" min={10} max={30} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home