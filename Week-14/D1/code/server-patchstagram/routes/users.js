const express = require('express');
const { User } = require('../db/models');
const router = express.Router();
const { asyncHandler, playerValidator } = require('../utils');


// GET All Users
router.get('/all', asyncHandler(async (req, res) => {
    const users = await User.findAll();
    res.json({ users })
}));



module.exports = router;