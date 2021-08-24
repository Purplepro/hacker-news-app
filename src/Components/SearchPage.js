import axios from 'axios';
import React,{useState} from 'react';
import {Link} from 'react-router-dom';

export default function SearchPage(props) {
        // creating state to fetch the api
    const [search, setSearch] = useState('')

    
    // this is my function to monitor the words that are put into the input so these keywords that only matches specific data
    // in the api and so one the data is fetched it renders the topic related to that keyword 
    const handleSearch = (event) => {
        setSearch(event.target.value)
    }


    const handleSubmit = (event) => {       
        event.preventDefault();
            // this is where I bring my useState variable to monitor the state of the key words in order to
            // target specific data from the api    
        let url = `http://hn.algolia.com/api/v1/search_by_date?query=${search}`; 
        axios
        .get(url)
        .then((response) => {
            const result = response.data.hits;
            // this pushes the data fetched from the api to the results page using history
            props.history?.push ({
                pathname: '/results', 
                state: result,
            });
        })
        .catch((error) => {
            console.log(error)
            console.log('Error while fetching data!')
        })
    }

    return (
        <div>
            <div className="search-form-container">
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder="search" onChange={handleSearch} value={search}/>
                    <button type="submit">Search</button>
                </form>
                <hr/>
                <Link to="/history">Your Search History</Link>
            </div>
        </div>
    )
}
