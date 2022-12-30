const express = require('express')
const app = express()
const port = process.env.PORT || 3001;


app.get('/status', (req, res)=>{
    res.status(200)
    res.send('Okay')
})

app.get('/api/quotes',(req, res)=>{
    res.status(200)
    //api for quotes
    var url="https://type.fit/api/quotes"    

    // fetch the data from api
    const response=await fetch(url)
    console.log(typeof response)
    //convert response to json and store it in quotes array
    const allQuotes = await response.json()

    // Generates a random number between 0 and the length of the quotes array
    const indx = Math.floor(Math.random()*allQuotes.length)

    //Store the quote present at the randomly generated index
    const quote=allQuotes[indx]
    res.send(quote)	

})

app.listen(port, ()=>{
    console.log(`Example app listening on http://localhost:${port}`);
})
