const express = require('express');
const userController = require('../Controller/user.controller');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('user route')
});

router.route('/newpost')
    .post(userController.crateUserPost)
    .get(userController.getUserPost)

router.route('/:id')
    .get(userController.getUserPostById)

module.exports = router