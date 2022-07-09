import React from 'react'
import './SuggestionsBlock.css';

const SuggestionsBlock = () => {
    return (
        <div className='SuggestionsBlock'>
            <div className='event'>
                <p className='eventreq'>
                    Event
                </p>
                <p className='eventres'>
                    Event
                </p>
            </div>

            <div className='event'>
                <p className='eventreq'>
                    From
                </p>
                <p className='eventres'>
                    Event
                </p>
            </div>
            <div className='event'>
                <p className='eventreq'>
                    To
                </p>
                <p className='eventres'>
                    Event
                </p>
            </div>
        </div>
    )
}

export default SuggestionsBlock