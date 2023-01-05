const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))

app.get('/status', (req, res)=>{
    res.status(200)
    res.send('Okay')
})

app.get('/',(req, res)=>{
    res.render("index")
})

app.listen(port, ()=>{
    console.log(`Example app listening on http://localhost:${port}`)
})

