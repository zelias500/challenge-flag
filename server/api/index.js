import {Router} from 'express';
import Vid from './Vid';

const router = new Router();

// get all videos
router.get('/api/vid', async (req, res, next) => {
  try {
    const vids = await Vid.find({});
    res.status(200).json(vid);
  }
  catch (err) {
    next(err);
  }
})

// get one video
router.get('/api/vid/:id', async (req, res, next) => {
  try {
    const vid = await Vid.findById(req.params.id);
    res.status(200).json(vid);
  }
  catch (err) {
    next(err);
  }
})

router.post('/api/vid', async (req, res, next) => {
  try {
    const vid = await Vid.create(req.body);
    res.status(201).json(vid);
  }
  catch (err) {
    next(err);
  }
})

router.post('/api/vid/:id', async (req, res, next) => {
  try {
    const vid = await Vid.addVote(req.body.addedVote);
    res.status(200).json(vid);
  }
  catch (err) {
    next(err);
  }
})

export default router;