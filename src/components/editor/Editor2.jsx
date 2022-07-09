import React from 'react'
import { useState } from 'react';
import './Editor.css';
import axios from 'axios';
import { useEffect } from 'react';

const Editor2 = ({title}) => {

    const [eventName2, changeEventName2] = useState('')
    const [eventNameError2, changeEventNameError2] = useState(false)

    const [description2, changeDescription2] = useState('')
    const [descriptionError2, changeDescriptionError2] = useState(false)

    const [date2, changeDate2] = useState('')
    const [eventDateError2, changeDateError2] = useState(false)

    const [startTime2, changeStartTime2] = useState('')
    const [startTimeError2, changeStartTimeError2] = useState(false)

    const [endTime2, changeEndTime2] = useState('')
    const [endTimeError2, chanegeEndTimeError2] = useState(false)

    const [earliestTime2, changeEarliestTime2] = useState('')
    const [earliestTimeError2, changeEarliestTimeError2] = useState(false)

    const [latestTime2, changeLatestTime2] = useState('')
    const [latestError2, changeLatestError2] = useState(false)

    const [affirmation2, changeAffirmation2] = useState('')


    const formSubmit =(data)=>{
        data.preventDefault()


        axios.post(`http://localhost:8080/${title}`, {
            eventName: eventName2,
            description: description2,
            date: date2,
            startTime: startTime2,
            endTime: endTime2,
            earliestTime: earliestTime2,
            latestTime: latestTime2

        }).then(res=>{
            changeAffirmation2(res.data.eventName);
        })

        // (eventName == '') ? changeEventNameError(true) : changeEventNameError(false);
        // (description == '') ? changeDescriptionError(true) : changeEventNameError(false);
        // (date == '') ? changeDateError(true) : changeEventNameError(false);
        // (startTime == '') ? changeStartTimeError(true) : changeEventNameError(false);
        // (endTime == '') ? changeEndTimeError(true) : changeEventNameError(false);

        
        
    }


    return (<>
            <h2 className='formTitle'>{title}</h2>
        <div className='Editor'>
            <form method='post' action='' onSubmit={formSubmit}>

                {affirmation2 ? <p className='affirmation'>{affirmation2} has been scheduled successfully </p> : ""}

                <label htmlFor='eventName'>
                    <p>
                        Event Name:
                    </p>
                    <input id='eventName' type='text' name='eventName' value={eventName2} onChange={(e)=>changeEventName2(e.target.value)}/>
                </label>
                { eventNameError2?<p className='formError'>Put an event name</p> : ''}

                <label htmlFor='description'>
                    <p>
                        Description:
                    </p>
                    <input id='description' type='text' name='description' value={description2} onChange={(e)=>changeDescription2(e.target.value)}/>
                </label>
                { eventNameError2?<p className='formError'>Put a description</p> : ''}
                
                <label htmlFor='date'>
                    <p>
                        Date:
                    </p>
                    <input id='date' type='date' name='date' value={date2} onChange={(e)=>changeDate2(e.target.value)}/>
                </label>
                { eventNameError2?<p className='formError'>Put a date</p> : ''}
                
                <label htmlFor='startTime'>
                    <p>
                        Start Time:
                    </p>
                    <input id='startTime' type='time' name='startTime' value={startTime2} onChange={(e)=>changeStartTime2(e.target.value)}/>
                </label>
                { eventNameError2?<p className='formError'>Put a start time</p> : ''}
                
                <label htmlFor='endTime'>
                    <p>
                        End Time:
                    </p>
                    <input id='endTime' type='time' name='endTime' value={endTime2} onChange={(e)=>changeEndTime2(e.target.value)}/>
                </label>
                { eventNameError2?<p className='formError'>Put an end time</p> : ''}
                
                <label htmlFor='earliestTime'>
                    <p>
                        Earliest Available Time:
                    </p>
                    <input id='earliestTime' type='time' name='earliestTime' value={earliestTime2} onChange={(e)=>changeEarliestTime2(e.target.value)}/>
                </label>
                { eventNameError2?<p className='formError'>Put your earliest available time</p> : ''}
                
                <label htmlFor='latestTime'>
                    <p>
                        Latest Available Time:
                    </p>
                    <input id='latestTime' type='time' name='latestTime' value={latestTime2} onChange={(e)=>changeLatestTime2(e.target.value)}/>
                </label>
                { eventNameError2?<p className='formError'>Put your latest available time</p> : ''}
                
                <label htmlFor='eventName'>
                <input type='submit' value='Schedule'/>
                </label>
                
            </form>
        </div>
        </>
    )
}

export default Editor2