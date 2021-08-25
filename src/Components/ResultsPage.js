import React from 'react'
import {Link} from 'react-router-dom'

export default function ResultsPage(props) {
    console.log(props)
    // the variable declared below is where I am bringing in the data through history from the api.
    const data = props.history.location.state;
    
    
    // here I am storing my data into localstorage so I can access it at a later point.
    let storedData = localStorage.setItem('data', JSON.stringify(data))
    console.log(storedData)
    


    // being that I am using history, I can map through the array of objects on the results page as shown below and then render it
    const hitList = data.map((data, idx) => {
        return (
            <ul key={idx}>
                <div>
                  <li> Author: {data.author}</li> 
                  <li>Story Title: {data.story_title}</li>  
                  <li>Comment: {data.comment_text}</li>  
                  <li>Created on: {data.created_at}</li>   
                </div>
                <hr/>
            </ul>
        )
    })

    return (
        <div>
            <Link to='/'><h1>Search</h1></Link> 
            <Link to='/history'><h1>Your History</h1></Link>
            {/* In order for me to show my data I first had to map through the array of objects and then put the variable "hitlist" in the return */}
            <h3>{hitList}</h3>
        </div>
    )
}
