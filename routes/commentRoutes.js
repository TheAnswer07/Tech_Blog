const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const passport = require('passport');


router.get('/comments', passport.authenticate('jwt'), async function (req, res) {
    const comments = await Comment.findAll({include: [Post]})
    res.json(comments)
});

router.post('/comments', passport.authenticate('jwt'), async function (req, res) {
    const comment = await Comment.create(req.body)
    res.json(comment);
});

module.exports = router;