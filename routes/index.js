var express = require('express');
var router = express.Router();

/* GET kotisivu. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Elokuvat' });
});

module.exports = router;
