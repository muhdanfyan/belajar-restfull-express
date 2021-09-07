import express from "express";
import mongoose from "mongoose";
const app  = express();

mongoose.connect('mongodb://localhost:27017/restful_db', {
    useNewUrlParser: true,
    useUnifiedTopology:true
});

const db = mongoose.connection;
db.on('error', (error)=> console.error(error));
db.once('open', () => console.log('Database Connected'));


app.get('/', (res, req) => {
    res.send('Welcome');
});

app.listen('3000', ()=> console.log('Server Running at port : 3000'));
