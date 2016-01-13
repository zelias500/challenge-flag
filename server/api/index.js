import {Router} from 'express';
import Vid from './Vid';
// var Vid = require('mongoose').model('Vid');

const router = new Router();

function parseVidID (vid) {
  return vid.vidURL.slice(vid.vidURL.indexOf('=')+1);
}

// get all videos
router.get('/vid',  (req, res, next) => {
  try {
    Vid.find({}).then(vid => {
      res.status(200).json(vid)
    })
  }
  catch (err) {
    next(err);
  }
})

router.post('/vid',  (req, res, next) => {
  try {
    let id = parseVidID(req.body);
    req.body.vidID = id;
    Vid.create(req.body).then(vid => {
      res.status(201).json(vid);
    })

  }
  catch (err) {
    next(err);
  }
})

// get a random video
router.get('/vid/random', (req, res, next) => {
  try {
    Vid.findRandom().then(vid => {
      res.status(200).json(vid);
    })
  }
  catch (err) {
    next(err);
  }
})

// get one video
router.get('/vid/:id',  (req, res, next) => {
  try {
    Vid.findById(req.params.id).then(vid => {      
      res.status(200).json(vid);
    })
  }
  catch (err) {
    next(err);
  }
})

router.post('/vid/:id',  (req, res, next) => {
  try {
    Vid.findById(req.params.id)
    .then(vid => {
      return vid.addVote(req.body.addedVote)
    })
    .then(vid => {
      res.status(200).json(vid);
    })
  }
  catch (err) {
    next(err);
  }
})

module.exports = router;