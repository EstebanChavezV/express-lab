const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('<h2>Listado de Clientes</h2><p>Aquí iría la lista de clientes.</p>');
});

module.exports = router;
