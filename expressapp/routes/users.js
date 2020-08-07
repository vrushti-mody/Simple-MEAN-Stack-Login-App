var express = require('express');
var router = express.Router();
var User = require('../models/user');
const passport = require('passport');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/register',function(req,res,next){
  database(req,res);
})

async function database(req,res){
  var user= new User({
    name:req.body.name,
    email:req.body.email,
    password: User.hashPassword(req.body.password),
    createdAt: Date.now()
  });
  try{
    doc=await user.save()
    return res.status(201).json(doc);
  }
  catch(err){
    return res.status(501).json(err);
  }
  
}

router.get('/google/login', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile'] }))

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/err' }), (req, res) => {
  req.login(req.session.passport.user,function(err){
    if(err){ return res.status(501).json(err);}
   
        return res.render('google.ejs');
      
   
    //return res.status(200).json({message:'Login Successful'});

  });
})

router.post('/login',function(req,res,next){
  passport.authenticate('local', function(err,user,info){
    if (err){ return res.status(501).json(err);}
    if (!user){ return res.status(501).json(info);}
    req.login(user,function(err){
      if(err){ return res.status(501).json(err);}
      return res.status(200).json({message:'Login Successful'});
    });
  })(req,res,next);
});


router.get('/user',isValidUser,function(req,res,next){
  return res.status(200).json(req.user);
});

router.get('/settings',isValidUser,function(req,res,next){
  return res.status(200).json(req.user);
});

router.put('/settings',isValidUser,function(req,res,next){
   updatedatabase(req,res)

});

async function updatedatabase(req,res){
  
  User.findByIdAndUpdate(req.user._id,req.body).exec().then(result=>{
    return res.status(201).json(result);
  }).catch(err=>{
    return res.status(501).json(err);
  })
}
  

router.get('/logout',isValidUser,function(req,res,next){
  req.logout();
  return res.status(200).json({message:'Logout Successful'});
});

function isValidUser(req,res,next){
  if(req.isAuthenticated()){
    next()
  }
  else{
  return res.status(401).json({message:'Unauthorized Request'});
  }
}

module.exports = router;
