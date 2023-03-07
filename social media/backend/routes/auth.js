const router = require('express').Router();
const User = require('../models/Users');
const bcrypt = require('bcrypt');
const { request } = require('express');
const { findById } = require('../models/Users');

router.get('/', (req, res) => {
    res.send("Welocome brijal")
})

// Register API
router.post("/register",async (req, res)=>{
    try {
        // encoding pass 
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        // Creating new user 
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: secPass,
        })
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
    }
})

// Login API
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        if(!user) return res.status(404).json("User not found");
        // Validate password
        const validPass = await bcrypt.compare(req.body.password, user.password);
        if(!validPass) return res.status(404).json("Password Incorrect");

        return res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Update User
router.put("/update/:id", async(req, res) =>{
    const user = await User.findOneAndUpdate(req.params.id, {$set: req.body},{ new: true });
    res.status(200).send(user)
})

// Delete User
router.delete("/:id", async(req, res) =>{

})
// Get a User
router.get("/:id", async(req, res) =>{

})
// Follow User

// Un Follow User
module.exports = router;