import React from 'react'
import { Link } from 'react-router-dom';



export default function SearchHistoryPage(item) {
    
    
    
    const storedData = JSON.parse(localStorage.getItem('data'));
    storedData.push(item);
    

        const searchHistory = storedData.map((data, idx) => {
            return (
                <ul key={idx}>
                  <li> Author: {data.author}</li> 
                  <li>Story Title: {data.story_title}</li> 
                  <li>Comment: {data.comment_text}</li>  
                  <li>Created on: {data.created_at}</li>
                  <hr/>  
                </ul>
            )
        })

    return (
        <div>
            <Link to='/'><h2>Search</h2></Link>
            <h1>Your Previous Searches</h1>
            <h2>{searchHistory}</h2>
        </div>
    )
}
