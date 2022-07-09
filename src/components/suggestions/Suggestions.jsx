import React from 'react'
import './Suggestions.css';
import SuggestionsBlock from './suggestions_blocks/SuggestionsBlock';
import { useState } from 'react';

const Suggestions = () => {
    const [message, setMessage] = useState('No suggestions yet...');

    try {
        let response = fetch('https://onfranciis-virtint.herokuapp.com/suggestion', {
                // signal: controller.signal
            })
            .then(response => response.json())
            .then(res=>{
                        setMessage(res.message)
                        console.log(res);
            })
        
            } catch(err) {
            if (err.name == 'AbortError') { // handle abort()
                alert("Aborted!");
            } else {
                throw err;
                console.log("Error here =>",err);
            }
            }


    return (
        <div className='Suggestions'>
            <h2>Suggested Time</h2>
            {/* <SuggestionsBlock/> */}
            <p className="message">
                {message}
            </p>

        </div>
    )
}

export default Suggestions