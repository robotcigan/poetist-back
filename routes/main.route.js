const router = require('express').Router();
const poemService = require('../services/poem.service');
const poetService = require('../services/poet.service');
const searchService = require('../services/search.service');

router.get('', (req, res, next) => {
  res.send('main page');
});


// show all poems
router.get('/poems', (req, res, next) => {
  poemService.findPoems()
    .then(poems => {
      // lightPoems Чтобы не прегружать данными при их передачи, я убираю тексты и другую лишнюю инфу и оставляю только url, poet, title
      let lightPoems = poems.map(poem => {
        let newPoem = {
          "url": poem.url,
          "title": poem.title,
          "poet": poem.poet
        }
        return newPoem
      })
      // res.send(poems);
      res.send(lightPoems);
    })
    .catch(err => next(err));
});

// find poems by multiple Poets (authors) for search
router.get('/poemsbypoets', (req, res, next) => {
  // console.log(req.query.poets)
  poemService.findPoemsByPoets(req.query.poets, req.query.popular)
    .then(poems => {
      // lightPoems Чтобы не прегружать данными при их передачи, я убираю тексты и другую лишнюю инфу и оставляю только url, poet, title
      let lightPoems = poems.map(poem => {
        let newPoem = {
          "url": poem.url,
          "title": poem.title,
          "poet": poem.poet
        }
        return newPoem
      })
      res.send(lightPoems);
    })
    .catch(err => next(err));
})

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
  // console.log(req.params.url)
  poemService.findPoemsByPoet(req.params.url, req.query.popular)
    .then(poems => {
      // lightPoems Чтобы не прегружать данными при их передачи, я убираю тексты и другую лишнюю инфу и оставляю только url, title, popular
      let lightPoems = poems.map(poem => {
        let newPoem = {
          "url": poem.url,
          "title": poem.title
        }
        return newPoem
      })
      res.send(lightPoems);
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

// ---------------------------

// delete all poems
router.get('/deleteallpoems', (req, res, next) => {
  poemService.deleteAllPoems()
    .then(poems => {
      res.send(poems);
    })
    .catch(err => next(err));
});

module.exports = router;