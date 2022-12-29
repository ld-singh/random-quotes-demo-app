const express = require('express')
const app = express()
const port = process.env.PORT || 3000;


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
