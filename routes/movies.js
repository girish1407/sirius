var express = require('express');
var router = express.Router();
var moviesController=require('../contollers/moviesController');

/* GET users listing. */
router.get('/all',moviesController.getAllMovies);
router.post('/add',moviesController.addNewMovie);
module.exports = router;
