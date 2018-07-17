const express = require('express');
const router = express.Router();

// User Model
const User = require('../../models/User');
// Car Model
const Car = require('../../models/Car');
// Contract Model
const Contract = require('../../models/Contract');


// @route GET api/users
// @desc Gets all users
// @access Public

router.get('/', (req,res) => {
    User.find()
        .then(users => res.json(users))
});

// @route POST api/users
// @desc Create a user
// @access Public

router.post('/', (req,res) => {
    const newUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password
    });
    newUser.save().then(user => res.json(user));
});


module.exports = router;