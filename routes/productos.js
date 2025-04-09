const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('<h2>Listado de Productos</h2><p>Aquí iría la lista de productos.</p>');
});

module.exports = router;
