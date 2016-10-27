
var express = require('express');
var router = express.Router();

var Elokuva = require('../models/Elokuva.js');

/* GET /elokuvat  */
router.get('/', function(req, res, next) {
    Elokuva.find(function (err, todos) {
        if (err) return next(err);
        res.json(todos);
    });
});

/* POST /elokuvat  */
router.post('/', function(req, res, next) {
    Elokuva.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* GET /elokuvat /id */
router.get('/:id', function(req, res, next) {
    Elokuva.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /elokuvat /:id */
router.put('/:id', function(req, res, next) {
    Elokuva.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /elokuvat /:id */
router.delete('/:id', function(req, res, next) {
    Elokuva.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;