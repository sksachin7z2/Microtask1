const express=require('express');
const app=express();
const cors=require('cors');
const PORT=5000;
app.use(cors());
app.use(express.json());
app.use('/public',express.static(__dirname+ '/public'))

app.get('/',async(req,res)=>{
    res.sendFile(__dirname+"/landing.html");
})
app.use('/api/user',require('./users/users'));

// app.listen(PORT,()=>{
//     console.log(`server is listening at ${PORT} `);
// })
module.exports = app;
