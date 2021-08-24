import React from 'react'
import {Link} from 'react-router-dom'

export default function ResultsPage(props) {
    console.log(props)
    const data = props.history.location.state;

    const hitList = data.map((data, idx) => {
        return (
            <ul key={idx}>
                <div>
                  <li> Author: {data.author}</li> 
                  <li>Story Title: {data.story_title}</li> 
                  <li>Comment: {data.comment_text}</li>  
                  <li>Created on: {data.created_at}</li>  
                  <li></li>  
                </div>
                <hr/>
            </ul>
        )
    })

    return (
        <div>
            <Link to='/'><h1>Search</h1></Link> 
            <Link to='/history'><h1>Your History</h1></Link>

            <h3>{hitList}</h3>
        </div>
    )
}
