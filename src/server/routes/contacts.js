const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');
const dummyData = require('../dummy.js');
const db  = require('../config/db-config').db;


router.get('/contacts', function (req, res, next) {

  db.many('SELECT * FROM contacts')
  .then((contacts) => {
    console.log(contacts);
    res.render('contacts', { contacts })
  }).catch(err => console.log(err));

});

// router.get('/contacts', function (req, res, next) {
//
//   db.many('SELECT * FROM contacts')
//   .then((contacts) => {
//     console.log(contacts);
//   }).catch(err => console.log(err));
//
//   const renderObject = {};
//   renderObject.title = 'hi';
//   renderObject.dummy = dummyData.all
//
//   res.render('contacts', renderObject)
//
// });
//
// router.get('/contacts/:id', function (req, res, next) {
//   const renderObject = {};
//   renderObject.title = 'hi';
//   indexController.sum(1, 2, (error, results) => {
//     if (error) return next(error);
//     if (results) {
//
//       res.render('contacts', renderObject);
//     }
//   });
// });
//
// router.post('/contacts', function (req, res, next) {
//   const renderObject = {};
//   renderObject.title = 'hi';
//   indexController.sum(1, 2, (error, results) => {
//     if (error) return next(error);
//     if (results) {
//
//       res.render('contacts', renderObject);
//     }
//   });
// });

module.exports = router;
