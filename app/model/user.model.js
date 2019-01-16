const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
  name:String,
  userId:Number,
  password:String
},
{
  timeStamps:true
});

module.exports=mongoose.model('User',userSchema);
