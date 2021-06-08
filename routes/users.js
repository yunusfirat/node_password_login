const express = require("express");
const router = express.Router();

//  login page
router.get("/login", (req,res) => {
    res.send("login")
})

//  register
router.get("/register", (req,res) => {
    res.send("Register")
})

module.exports = router;