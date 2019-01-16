const User=require('../model/user.model.js');

// create user
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

// retrive all user
exports.findAll=(req,res)=>
{
User.find().sort({userId:1}).then(user=>res.send(user)).catch(err=>{
  res.status(500).send({message:err.message || "Some error occurred while retrieving the user."});
});
}

// retrive single user
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

// delete single user
exports.deleteOne=(req,res)=>{
  if(!req.body.id)
  {
    res.status(404).send({'message':'Id can not be empty'})
  }
  User.deleteOne({userId:req.body.id}).then(user=>{
    if(!user)
    {
      res.status(404).send({'message':'User not found with id '+id})
    }
    res.send('User deleted successfully');
  }).catch(err=>{
    res.status(500).send({'message':err.message || "Some error occurred while deleting user"})
  })
}

// update record

exports.updateRecord=(req,res)=>
{
  if(!req.body.id)
  {
    res.status(404).send({'message':'Id can not be empty'})
  }
  var myQuery={userId:req.body.id}
  var newValues={$set:{name:req.body.name}};
  User.updateOne(myQuery,newValues).then(user=>{
    if(!user)
    {
      res.status(404).send({'message':'User not found with id '+id})
    }
    res.send(user);
  }).catch(err=>{
    res.status(500).send({'message':err.message || "Some error occurred while deleting user"})
})
}
