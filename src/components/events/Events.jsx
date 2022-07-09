import axios from 'axios';
const source = axios.CancelToken.source();
const cancelToken = source.token;
import React, { useState, useRef } from 'react'
import './Events.css';

const Events = () => {
    const [user1, changeuser1] = useState('')
    const [eventName1, changeEventName1] = useState('')
    const [description1, changeDescription1] = useState('')
    const [date1, changeDate1] = useState('')
    const [startTime1, changeStartTime1] = useState('')
    const [endTime1, changeEndTime1] = useState('')
    const [earliestTime1, changeEarliestTime1] = useState('')
    const [latestTime1, changeLatestTime1] = useState('')

    const [user2, changeuser2] = useState('')
    const [eventName2, changeEventName2] = useState('')
    const [description2, changeDescription2] = useState('')
    const [date2, changeDate2] = useState('')
    const [startTime2, changeStartTime2] = useState('')
    const [endTime2, changeEndTime2] = useState('')
    const [earliestTime2, changeEarliestTime2] = useState('')
    const [latestTime2, changeLatestTime2] = useState('')

    const [testing, setTesting] = useState('')
    const cancelTokenSource = useRef();


    // axios.get(``)
    //     .then(res=>{
    //         changeuser1(res.data.some1.some1.user1)
    //         changeuser2(res.data.some2.some2.user2)
    //         console.log('consoled...')
    //         // cancelToken: source.token
    //         // console.log('Token cancelled...')
    //         // cancel()
    //     })
  
    //     const cancel = () => {
    //         source.cancel();
    //     };
    //     cancel()


    // let controller = new AbortController();
    // setTimeout(() => controller.abort(), 1000);

    // const events = ()=>{

        // const refreshRef = useRef(null)


        try {
        let response = fetch('https://onfranciis-virtint.herokuapp.com/events', {
                // signal: controller.signal
            })
            .then(response => response.json())
            .then(res=>{
                        changeuser1(res.some1.user1)
                        changeuser2(res.some2.user2)
            })
        
            } catch(err) {
            if (err.name == 'AbortError') { // handle abort()
                alert("Aborted!");
            } else {
                throw err;
                console.log("Error here =>",err);
            }
            }
    // }
    // events()


    return (
        <div className='Result'>
            <h2>Events</h2>
            <table>
            <thead>
                <tr>
                    <th>Details</th>
                    <th>User1</th>
                    <th>User2</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Event Name</td>
                    <td>{user1.eventName}</td>
                    <td>{user2.eventName}</td>
                </tr>
                <tr>
                    <td>Description</td>
                    <td>{user1.description}</td>
                    <td>{user2.description}</td>
                </tr>
                <tr>
                    <td>Date</td>
                    <td>{user1.date}</td>
                    <td>{user2.date}</td>
                </tr>
                <tr>
                    <td>Start Time</td>
                    <td>{user1.startTime}</td>
                    <td>{user2.startTime}</td>
                </tr>
                <tr>
                    <td>End Time</td>
                    <td>{user1.endTime}</td>
                    <td>{user2.endTime}</td>
                </tr>
                <tr>
                    <td>Earliest Available Time</td>
                    <td>{user1.earliestTime}</td>
                    <td>{user2.earliestTime}</td>
                </tr>
                <tr>
                    <td>Latest Available Time</td>
                    <td>{user1.latestTime}</td>
                    <td>{user2.latestTime}</td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}


export default Events