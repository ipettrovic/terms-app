const express = require('express');
const router = express.Router();
const { addTerm, getSingleTerm, getTerms, searchTerm} = require('../controllers/terms');


router
  .route('/')
  .get(getTerms)
  .post(addTerm)

router
  .route('/term/:abbreviation')
  .get(searchTerm)

router
  .route('/:id')
  .get(getSingleTerm)




module.exports = router;