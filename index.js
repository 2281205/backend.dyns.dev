const express = require('express')
const app = express()
const mongoose = require("mongoose");
const cors = require('cors');
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

app.use(cors())
app.get('/api', (req, res) =>{
    res.json({message: `Hi from My backend++ upKEY=${UPKEY}`})
})
