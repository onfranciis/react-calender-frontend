import React from 'react'
import { Link } from 'react-router-dom'
import Editor1 from '../editor/Editor1';
import Editor2 from '../editor/Editor2';
import './Body.css';
import Home from '../home/Home';
import Events from '../events/Events';
import Suggestions from '../suggestions/Suggestions';

const Body = (props) => {
  // const Date = new Date()

  return (
    <div className='Body'>
      {/* <p>{Date}</p> */}
      {props.section == 'Home' ? <Home title={props.section}/> : (props.section == 'User1' ? <Editor1 title={props.section}/> : <Editor2 title={props.section}/>)}
      <Events/>
      <Suggestions/>
    </div>
  )
}

export default Body