import { Router } from 'express';
var router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('phone', { title: 'Search Results phone' });
});

export default router;
