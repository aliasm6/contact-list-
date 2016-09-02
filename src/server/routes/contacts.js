const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');
const dummyData = require('../dummy.js')
router.get('/contacts', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'hi';
  renderObject.dummy = dummyData.all
  
  res.render('contacts', renderObject);
  // indexController.sum(1, 2, (error, results) => {
  //   if (error) return next(error);
  //   if (results) {
  //
  //     res.render('contacts', renderObject);
  //   }
  // });
});
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
