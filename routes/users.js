const express = require("express");
const router = express.Router();

//  login page
router.get("/login", (req,res) => {
    res.render("login")
})

//  register
router.get("/register", (req,res) => {
    res.render("register")
})

// register Handle
router.post("/register", (req,res) => {
    const { name, email, password, password2 } = req.body;
    let errors = [];

    //  check required fields
    if(!name || !email || !password || !password2) {
        errors.push({msg: "please fill in all fields" } )
    }

    // check password match
    if(password !== password2){
        errors.push( {msg: "Passwords do not match "})
    }
    if(password.length < 6 ){
        errors.push( { msg: "password should be at least 6 characters."} )
    }

    if(errors.length > 0){
        res.render("register", {
            errors,
            name,
            email,
            password,
            password2
        })
        console.log(errors,name,email,password2)
    }else{
        res.send("pass")
    }
})
module.exports = router;