const router = require('express').Router();
const poemService = require('../services/poem.service');
const poetService = require('../services/poet.service');
const searchService = require('../services/search.service');

router.get('', (req, res, next) => {
  res.send('main page');
});

// show all poem
router.get('/poems', (req, res, next) => {
  poemService.findPoems()
    .then(poems => {
      res.send(poems);
    })
    .catch(err => next(err));
});

// show one poem by url
router.get('/poem/:url', (req, res, next) => {
  poemService.findPoemByUrl(req.params.url)
    .then(poem => {
      res.send(poem);
    })
    .catch(err => next(err));
});

// show all poems by one poet (author)
router.get('/poet/:url/poems', (req, res, next) => {
  poemService.findPoemsByPoet(req.params.url)
    .then(poems => {
      res.send(poems);
    })
    .catch(err => next(err));
})

// ---------------------------

// show all poets
router.get('/poets', (req, res, next) => {
  poetService.findPoets()
    .then(poets => {
      res.send(poets);
    })
    .catch(err => next(err));
});

// show one poet by url
router.get('/poet/:url', (req, res, next) => {
  poetService.findPoetByUrl(req.params.url)
    .then(poet => {
      res.send(poet);
    })
    .catch(err => next(err));
})

// ---------------------------

router.post('/search', (req, res, next) => {
  console.log(req.body)
  // res.send({text: 'from server'})
  searchService.search(req.body.query)
    .then(searchResult => {
      console.log(searchResult)
      res.send(searchResult);
    })
    .catch(err => next(err));
});

module.exports = router;