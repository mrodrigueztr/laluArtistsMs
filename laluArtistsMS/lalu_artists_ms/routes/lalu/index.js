// RUTAS lALU
const router = require('express').Router();

router.use('/artist', require('./artist.route'))

module.exports = router;