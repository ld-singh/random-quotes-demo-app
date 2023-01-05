const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3001;

app.use(cors())

app.get('/status', (req, res)=>{
    res.status(200)
    res.send('Okay')
})

app.get('/api/quotes',(req, res)=>{
    res.status(200)
    //api for quotes
    var url="https://type.fit/api/quotes"

    // fetch the data from api
    let allQuotes;
    fetch(url)
    .then((response) => response.json())
    .then((body) => {
        allQuotes = body
        // Generates a random number between 0 and the length of the quotes array
        const indx = Math.floor(Math.random()*allQuotes.length)

        //Store the quote present at the randomly generated index
        const quote=allQuotes[indx]
        res.json(quote)
    })


})

app.listen(port, ()=>{
    console.log(`Example app listening on http://localhost:${port}`);
}

