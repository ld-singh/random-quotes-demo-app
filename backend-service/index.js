const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const Quote = require('inspirational-quotes')


app.get('/status', (req, res)=>{
    res.status(200)
    res.send('Okay')
})

app.get('/api/quotes',(req, res)=>{
    res.status(200)
    const randomQuote = Quote.getRandomQuote()	
    res.send(randomQuote)	

})

app.listen(port, ()=>{
    console.log(`Example app listening on http://localhost:${port}`);
})
