module.exports= (app) =>{
const user=require('../controllers/user.controller.js')

  app.post('/newUser',user.create);
  app.get('/users',user.findAll);
  app.get('/user/:id',user.finOne)

}
