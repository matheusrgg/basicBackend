var express = require('express');
var app = express();
require('dotenv').config()
var bp = require('body-parser')
const database = require("./db")


database.sync()
const fornecedorRoutes = require("./routes/fornecedor.routes")
const adminRoutes = require("./routes/admin.routes")

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use("/fornecedor", fornecedorRoutes)
app.use("/admin", adminRoutes)
app.get('/welcome', function (req, res) { res.status(200).send("teste"); })



//--------------------> Porta de Desenvolvimento
app.listen(4000, async function () {
  console.log("teste ok")
  return "servidor rodando"
})





//--------------------> Porta de Produção
// app.listen(process.env.PORT ||3000, async function () {
//   console.log("teste ok")
//   return "servidor rodando"
// })
