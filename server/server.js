const mongoose= require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router/routerProduct');



const app = express();

app.use(bodyParser.json());
app.use('/',router);


const connectionString = 'mongodb://localhost/mw-shopping';
const errorHandling = {useNewUrlParser:true ,  useUnifiedTopology: true};
mongoose.connect(connectionString , errorHandling).then(
   res => console.log('connection done')
)
                        

app.listen(3021, ()=>{
    console.log('running on port 3021')
});

