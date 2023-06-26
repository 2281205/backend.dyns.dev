const express = require('express')
require("dotenv").config();
const PORT = process.env.PORT || 3010
const UPKEY = process.env.UPKEY || 'nonKEY'
const app = express()

app.listen(PORT, ()=>{
    console.log(`SERVER start on ${PORT}`)
})

app.get('/api', (req, res) =>{
    res.json({message: `Hi from My backend++ upKEY=${UPKEY}`})
})