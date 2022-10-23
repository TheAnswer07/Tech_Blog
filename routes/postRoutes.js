const router = require('express').Router();
const { Post, User } = require('../models');
const passport = require('passport');
const jwt = require('jsonwebtoken');


router.get('/posts', passport.authenticate('jwt'), async function (req, res) {
    const posts = await Post.findAll({include: [User]})
    res.json(posts)
});

module.exports = router;