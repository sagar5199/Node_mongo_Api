module.exports= (app) =>{
const user=require('../controllers/user.controller.js')

  app.post('/newUser',user.create);
  app.get('/users',user.findAll);
  app.get('/user/:id',user.finOne)
  app.post('/deleteUser',user.deleteOne)
  app.post('/updateUser',user.updateRecord)
}
