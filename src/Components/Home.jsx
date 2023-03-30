import React, { useState } from 'react'
import './style.css'
import copyIcon from '../assets/icon.svg'

const lowerCaseList = 'abcdefghijklmnopqrstuvwxyz'
const upperCaseList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbersList = '0123456789'
const symbolsList = '!@#$%^&*()?'


function Home() {

    const [password, setPassword] = useState('')
    const [lowerCase, setLowerCase] = useState(true)
    const [upperCase, setUpperCase] = useState(true)
    const [numbers, setNumbers] = useState(true)
    const [symbols, setSymbols] = useState(true)
    const [passwordLength, setPasswordLength] = useState(10)
    const generatePassword = () => {
        let characterList = '';

        if(lowerCase){
            characterList += lowerCaseList;
        }if(upperCase){
            characterList += upperCaseList;
        }if(numbers){
            characterList += numbersList;
        }if(symbols){
            characterList += symbolsList;
        }
        
        let tempPassword = '';
        const characterListLength = characterList.length;

        for(let i=0; i < passwordLength; i++){
            const characterIndex = Math.round(Math.random() * characterListLength);
            tempPassword += characterList.charAt(characterIndex);
        }
        setPassword(tempPassword);
    }

    const copyPassword = async () => {
        const copyText = await navigator.clipboard.readText();
        if(passwordLength){
            navigator.clipboard.writeText(password);
        }
    }

  return (
    <div className='container'>
        <h2 className='title'>Password Generator</h2>
        <div className="password-wrapper">
            <div className="password-area">
                <div className="password">
                    <input type="text" value={password} disabled/>
                    <img src={copyIcon} alt='copyIcon' className='copyIcon' onClick={copyPassword} />
                </div>
            </div>
        </div>
        <div className="setting">
            <h3>Customize your password</h3>
            <div className="customize">
                <div className="checkboxes">
                    <div className="left">
                        <div className="checkbox-field">
                        <input type="checkbox" name="lower" id="lower" checked={lowerCase} onChange={() => setLowerCase(!lowerCase)}/>
                        <label htmlFor='lower'>Include lower case(a-z)</label>
                        </div>
                        <div className="checkbox-field">
                        <input type="checkbox" name="upper" id="upper" checked={upperCase} onChange={() => setUpperCase(!upperCase)}/>
                        <label htmlFor='upper'>Include upper case(A-Z)</label>
                        </div>
                    </div>
                    <div className="right">
                        <div className="checkbox-field">
                        <input type="checkbox" name="numbers" id="numbers" checked={numbers} onChange={() => setNumbers(!numbers)}/>
                        <label htmlFor='numbers'>Include numbers(0-9)</label>
                        </div>
                        <div className="checkbox-field">
                        <input type="checkbox" name="symbols" id="symbols" checked={symbols} onChange={() => setSymbols(!symbols)}/>
                        <label htmlFor='symbols'>Include symbols(!-?)</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="password-length">
            <h3>Password Length</h3>
            <div className="slider">
                <p className="rangeValue">{passwordLength}</p>
                <div className="range">
                    <input type="range" min={10} max={35} defaultValue={passwordLength} onChange={(event) => setPasswordLength(event.currentTarget.value)} />
                </div>
            </div>
        </div>
        <div className="buttons">
            <button className="generateBtn" onClick={generatePassword} type="button">Generate Password</button>
            <button className="resetBtn" type="button">Reset</button>
        </div>
    </div>
  )
}

export default Home