const express = require('express');
const { Post, User } = require('../db/models');
const router = express.Router();
const { asyncHandler, mobValidator, authorize } = require('../utils');


// GET All Posts
router.get('/all', asyncHandler( async (req, res) => {
    const posts = await Post.findAll({
        include: [ { model: User }],
        order: [['createdAt', 'DESC']],
    });   
    res.json({ posts });
}));


// GET All Posts for a user
router.get('/:userId', asyncHandler( async (req, res) => {
    const posts = await Post.findAll({
        where: { author: parseInt(req.params.userId) }, 
        include: [{ model: User }],
        order: [['createdAt', 'DESC']],
    });   
    res.json({ posts });
}));


// POST New Post route
router.post('/new', asyncHandler( async (req, res) => {

    const { caption, author, image } = req.body;

    try {
        const newPost = await Post.create({
            caption, 
            author,
            image,
            likes: 0,
        })
        console.log(newPost)
        const resPost = await Post.findOne({
            where: { id: newPost.id },
            include: [{ model: User }]
        })
        res.json({ resPost })
    } catch (e) {
        console.log("There was an error!", e )
    }
   
    
}));





// POST Create New Mob Route
router.post('/new', asyncHandler( async (req, res) => {
    const { name, about, image, hitPoints, biomeId, damage } = req.body
    if (req.errors.length < 1) {
        const setHostile = true ? req.body.hostile === "true" : false;
        const newMob = await Mob.create({
            name,
            about,
            image,
            hitPoints,
            biomeId,
            damage,
            hostile: setHostile
        });
    console.log(newMob);
    res.redirect('/mobs');
    } else {
        console.log('ERROR')
        const biomes = await Biome.findAll()
        res.render('mobform', {csrfToken: req.csrfToken(), biomes, mob: req.body, errors: req.errors})
    }
}));



module.exports = router;