const Router = require('express');
const router = new Router();
const GifCardController = require('../controllers/gifCardController');
const withAuth = require('../middleware/authMiddleware');

router.post('/', withAuth, GifCardController.create);
router.get('/', withAuth, GifCardController.getAll);
router.delete('/:id', withAuth, GifCardController.delete);

module.exports = router;
