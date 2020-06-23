var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var TodoL = require('../models/Todo.js');

//GET
router.get('/', function(req, res, next) {
    TodoL.find(function(err,todo){
        if(err) return next (err);
        res.json(todo);
    });
});

//POST
router.post('/', function(req, res, next){  
    TodoL.create(req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

//GET
router.get('/:id', function(req, res, next){  
    TodoL.findById(req.params.id, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

// PUT /todo/id
router.put('/:id', function(req, res, next){  
    TodoL.findByIdAndUpdate(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

// DELETE /todo/id
router.delete('/:id', function(req, res, next){  
    TodoL.findByIdAndRemove(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});
module.exports = router;