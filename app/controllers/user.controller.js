const User=require('../model/user.model.js');

exports.create=(req,res)=>{
  if(!req.body.name)
  {
    return res.status(400).send({message:'content can not be empty'})
    console.log(req.body);
  }
  const user=new User({
    name:req.body.name,
    userId:req.body.id,
    password:req.body.password
  });
  user.save().then(data=>{
    res.send(data);
  }).catch(err=>{
    res.status(500).send({message:err.message || "Some error occurred while creating the user."});
  })
}

exports.findAll=(req,res)=>
{
User.find().sort({userId:1}).then(user=>res.send(user)).catch(err=>{
  res.status(500).send({message:err.message || "Some error occurred while retrieving the user."});
});
}
exports.finOne=(req,res)=>{
  var id=req.params.id;

User.findOne({userId:id}).then(
  user=>{
    if(!user)
    {
      res.status(404).send({'message':'User not found with id '+id})
    }
    res.send(user);
  }).catch(err=>{
  res.status(500).send({message:err.message || "Some error occurred while retrieving the user."});
})
}
