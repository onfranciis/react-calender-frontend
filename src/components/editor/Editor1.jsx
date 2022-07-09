import React from 'react'
import { useState } from 'react';
import './Editor.css';
import axios from 'axios';
import { useEffect } from 'react';

const Editor1 = ({title}) => {

    const [eventName1, changeEventName1] = useState('')
    const [eventNameError1, changeEventNameError1] = useState(false)

    const [description1, changeDescription1] = useState('')
    const [descriptionError1, changeDescriptionError1] = useState(false)

    const [date1, changeDate1] = useState('')
    const [eventDateError1, changeDateError1] = useState(false)

    const [startTime1, changeStartTime1] = useState('')
    const [startTimeError1, changeStartTimeError1] = useState(false)

    const [endTime1, changeEndTime1] = useState('')
    const [endTimeError1, chanegeEndTimeError1] = useState(false)

    const [earliestTime1, changeEarliestTime1] = useState('')
    const [earliestTimeError1, changeEarliestTimeError1] = useState(false)

    const [latestTime1, changeLatestTime1] = useState('')
    const [latestError1, changeLatestError1] = useState(false)

    const [affirmation1, changeAffirmation1] = useState('')


    const formSubmit =(data)=>{
        data.preventDefault()


        axios.post(`http://localhost:8080/${title}`, {
            eventName: eventName1,
            description: description1,
            date: date1,
            startTime: startTime1,
            endTime: endTime1,
            earliestTime: earliestTime1,
            latestTime: latestTime1

        }).then(res=>{
            changeAffirmation1(res.data.eventName);
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

                {affirmation1 ? <p className='affirmation'>{affirmation1} has been scheduled successfully </p> : ""}

                <label htmlFor='eventName'>
                    <p>
                        Event Name:
                    </p>
                    <input id='eventName' type='text' name='eventName' value={eventName1} onChange={(e)=>changeEventName1(e.target.value)}/>
                </label>
                { eventNameError1?<p className='formError'>Put an event name</p> : ''}

                <label htmlFor='description'>
                    <p>
                        Description:
                    </p>
                    <input id='description' type='text' name='description' value={description1} onChange={(e)=>changeDescription1(e.target.value)}/>
                </label>
                { eventNameError1?<p className='formError'>Put a description</p> : ''}
                
                <label htmlFor='date'>
                    <p>
                        Date:
                    </p>
                    <input id='date' type='date' name='date' value={date1} onChange={(e)=>changeDate1(e.target.value)}/>
                </label>
                { eventNameError1?<p className='formError'>Put a date</p> : ''}
                
                <label htmlFor='startTime'>
                    <p>
                        Start Time:
                    </p>
                    <input id='startTime' type='time' name='startTime' value={startTime1} onChange={(e)=>changeStartTime1(e.target.value)}/>
                </label>
                { eventNameError1?<p className='formError'>Put a start time</p> : ''}
                
                <label htmlFor='endTime'>
                    <p>
                        End Time:
                    </p>
                    <input id='endTime' type='time' name='endTime' value={endTime1} onChange={(e)=>changeEndTime1(e.target.value)}/>
                </label>
                { eventNameError1?<p className='formError'>Put an end time</p> : ''}
                
                <label htmlFor='earliestTime'>
                    <p>
                        Earliest Available Time:
                    </p>
                    <input id='earliestTime' type='time' name='earliestTime' value={earliestTime1} onChange={(e)=>changeEarliestTime1(e.target.value)}/>
                </label>
                { eventNameError1?<p className='formError'>Put your earliest available time</p> : ''}
                
                <label htmlFor='latestTime'>
                    <p>
                        Latest Available Time:
                    </p>
                    <input id='latestTime' type='time' name='latestTime' value={latestTime1} onChange={(e)=>changeLatestTime1(e.target.value)}/>
                </label>
                { eventNameError1?<p className='formError'>Put your latest available time</p> : ''}
                
                <label htmlFor='eventName'>
                <input type='submit' value='Schedule'/>
                </label>
                
            </form>
        </div>
        </>
    )
}

export default Editor1