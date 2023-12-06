const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    return res.render("home");
})

router.get('/signup',(req,res)=>{
    return res.render("signUpPage");
})

router.get('/login',(req,res)=>{
    return res.render("loginpage");
})


module.exports = router;