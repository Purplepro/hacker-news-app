import axios from 'axios';
import React,{useState, createContext} from 'react';

export default function SearchPage(props) {
        // creating state to fetch the api
    const [search, setSearch] = useState('')

    
    // this is my function to monitor the words that are put into the input so these keywords that only matches specific data
    // in the api and so one the data is fetched it renders the topic related to that keyword 
    const handleSearch = (event) => {
        setSearch(event.target.value)
    }


    const handleSubmit = (event) => {       
        event.preventDefault()
            // at the end of query which is known as full-text query accoding to the api documentation
            // putting my e.target.value function to monitor the words that I p
        let url = `http://hn.algolia.com/api/v1/search_by_date?query=${search}`; 
        // this pushes the data fetched from the api to the results page.  
       


        axios
        .get(url)
        .then(response => {
            const results = response.data   
            console.log(results)
            props.fetchedData?.push ({
                pathname: '/results',
                news: {
                    newsData: results,
                },
            })
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
                    <input type='text' placeholder="search" onChange={handleSearch} value={search} />
                    <button type="submit">Search</button>
                </form>
            </div>
        </div>
    )
}
