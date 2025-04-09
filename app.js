const express = require('express');
const app = express();
const path = require('path');

// Rutas personalizadas
const clientesRouter = require('./routes/clientes');
const productosRouter = require('./routes/productos');

app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/clientes', clientesRouter);
app.use('/productos', productosRouter);


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});


const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
