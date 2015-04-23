var express = require('express');
var router = express.Router();
var config = require('../config/config.js');

var orion = require('fiware-orion-mintaka');
orion.configure(config.ORION);

/* GET listing. */
router.get('/', function(req, res, next) {
	orion.requestEntities().then(
		function(success){
			res.send(success);
		},
		function(error){
			res.send(error);
		}
	);
});

// query entity with attributes
router.get('/:entity',function(req, res, next){
	var e = req.params.entity;
	orion.queryAttributes(e).then(
		function(success){
			res.send(success);
		},
		function(error){
			res.send(error);
		}
	);
});

module.exports = router;
