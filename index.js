var express = require('express');
var app = express();

const cors = require('cors');


app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(cors())
app.use(express.static('public'));
app.use(express.json());



app.get('/welcome', function (req, res) { res.status(200).send("teste"); })



//--------------------> Porta de Desenvolvimento
app.listen(4000, async function () {
  console.log("teste ok")
  return "servidor rodando"
})



