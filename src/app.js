const express = require("express");
const cors = require("cors");
const eventosRoutes = require("./routes/eventosRoutes");
const inscricoesRoutes = require("./routes/inscricoesRoutes"); 
const usuariosRoutes = require("./routes/usuariosRoutes")
const app = express();
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api', eventosRoutes);
app.use('/api', inscricoesRoutes);
app.use('/api', usuariosRoutes);

module.exports = app;
