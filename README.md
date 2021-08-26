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

<h1>Since its an array of objects I must map of over the array in order to render it on the page.</h1>

<h3>here is the array of object in the console on the result page</h3>
<img src='src/Images/Screen Shot 2021-08-24 at 6.00.39 AM.png'>

<h1>As you can see I have mapped the data</h1>

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

# So what next? Search history?

    I recognized that this was a weakness of mines that I needed to work which and something that I needed more time one but nevertheless, I attempted this.

    1. Sense this was fully front end I needed something to store my data rather than storing my data on a backend database like postgresql or Mongodb.

    2. Localstorage came to mind and I took this method and ran with it.
            Local storage stores data with a key and value

    3. I started off by setting my item first in order to store it into localstorage. Being that Localstorage can only save strings I had to stringify using JSON.stringify.

```javascript
     const data = props.history.location.state;
    
    
    // here I am storing my data into localstorage so I can access it at a later point.
    let storedData = localStorage.setItem('data', JSON.stringify(data))
    console.log(storedData)
    
```
    4.  The results history was now stored in my localstorage. So now how do I bring that data into my history page for the user to see? We use getItem and it looks like this.

```javascript
    const storedData = JSON.parse(localStorage.getItem('data'));
    storedData.push(item);
    
```
    # Heres where it got tricky

    <h1>My Thinking process through this search history problem</h1>

    I just learned about localstorage while working on this take home assessment and before didn't know you could store data that way so I orginally thought that when data is stored in your local storage, the original data stays there it can just keep adding data into it without it being overwritten with new information. In essence, you can but what I found out I was doing was that I was pushing my data from the results page only when it was fetched so each time I searched the api the local storage would be overwritten with new data replacing the old so I needed to fetch my history and then push it into my local storage with the key called "data" before I push it to my results page. It ended up working but stopped working when I cleared my local storage. another problem then popped up. The data would be stored on the history page because I could see it in the console but my .map function stopped working because each time the data was stored inside of the local storage it would become nested. I did my research and came to a couple of theories. This is where I ran out of time to try and solve it more

    # Even though I was able to get data from the api, search the api, and render the api results. I was not able to have past search results stay on the history page. 

    #If I am not selected for further interviewing I would still like feed back on my work so I can see what I can improve on. THANK YOU :)





