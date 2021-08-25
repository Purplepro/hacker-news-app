#My plan of attack


# step one
Create my state to store my data through input 

# step two
create two functions
1. handleSearch function that takes in the value so the api can fetch this data through keyword and return matching data

2. handleSubmit function that pulls data from the api on submit through the form using axios. After the api is called the data pushed to history and onto the pathname '/results' page.

# step three
After this is done I then go onto the results page where Im able to render the data on the page through props.
 ``` javascript
 const data = props.history.location.state;
```

Since its an array of objects I must map of over the array in order to render it on the page.

here is the array of object in the console on the result page
<img src=''>


```javascript
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
```