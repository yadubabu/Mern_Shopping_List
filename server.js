const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

const app=express();
const items=require('./routes/api/items');

//Bodyparser Middleware
app.use(bodyParser.json());

//Use Routes
app.use('./api/items',items);

//DB Config
const db=require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
.connect(db)
.then(()=>console.log('Mongo DB connected'))
.catch((err)=>console.log(err));

const port=process.env.PORT || 5000;

app.listen(port,()=>console.log(`server is running on ${port}`));