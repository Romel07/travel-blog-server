const express = require('express');
const app = express();

const mongoose = require('mongoose');
// import  Mongoose  from 'mongoose';

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
.then(console.log('connected to mongoDB'))
.catch((err) => console.log(err));

const dotenv = require('dotenv');
dotenv.config();

app.listen(5000,()=>{
    console.log('backend is running');
})