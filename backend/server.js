const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cores = require('cors');
const bodyParser = require('body-parser');
//Import apis
const RecipeAPI = require('./src/routes/Recipe.router');

dotenv.config();
const app = express();
app.use(cores());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
},(error)=>{
    if(error){
        console.log('Database Error:',error.message);
    }
});

mongoose.connection.once('open',()=>{
    console.log('Database Synced');
});

app.route('/').get((req,res)=>{
    res.send('Hello World');
})

app.use("/recipes",RecipeAPI())

app.listen(PORT,()=>{
    console.log(`Server is up and running on PORT ${PORT}`);
});

