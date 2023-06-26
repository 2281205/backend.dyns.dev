const express = require('express')
const app = express()
const mongoose = require("mongoose");
mongoose.set = ("strictQuery", true);

require("dotenv").config();
const { DB_HOST, PORT=3010, UPKEY='nonKEY' } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log(`Database connection successful on ${PORT} port`);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
    });
app.get('/api', (req, res) =>{
    res.json({message: `Hi from My backend++ upKEY=${UPKEY}`})
})
