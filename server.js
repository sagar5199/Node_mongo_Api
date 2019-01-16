const express=require('express');
const bodyParser=require('body-parser');
const port=3001;
const app=express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const dbConfig=require('./config/database.config.js')
const mongoose=require('mongoose');
mongoose.Promise=global.Promise;

mongoose.connect(dbConfig.url,{
  useNewUrlParser:true
}).then(()=>{
  console.log("Successfully connected to the database");
}).catch(err=>{
  console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
})
require('./app/routes/user.routes.js')(app);
app.listen(port,()=>{
  console.log('server is running on '+port);
})
// app.get('/',(req,res)=>
// {
//   res.json({name:'Sagar',id:5})
//   res.end();
// })
