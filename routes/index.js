const express = require('express');
const router = express.Router();
const path = require('path');
const Review = require('../server/models/review');
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
