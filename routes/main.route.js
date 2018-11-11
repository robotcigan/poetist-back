const router = require('express').Router();
const poemService = require('../services/poem.service');

router.get('', (req, res, next) => {
  res.send('main page');
});

// show all poems
router.get('/poems', (req, res, next) => {
  poemService.findPoems()
    .then(poems => {
      res.send({poems: poems});
    })
    .catch(err => next(err));
});

// show one poem by id
router.get('/poem/:url', (req, res, next) => {
  poemService.findPoemByUrl(req.params.url)
    .then(poem => {
      res.send({poem: poem});
    })
    .catch(err => next(err));
});

module.exports = router;