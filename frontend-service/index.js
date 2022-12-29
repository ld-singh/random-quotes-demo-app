const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000;

// server your css as static
app.use(express.static(path.join(__dirname, "css")));

app.get('/status', (req, res)=>{
    res.status(200)
    res.send('Okay')
})

app.get('/',(req, res)=>{
    res.status(200)
    res.sendFile(path.join(__dirname, '/index.html'));

})

app.listen(port, ()=>{
    console.log(`Example app listening on http://localhost:${port}`);
})
