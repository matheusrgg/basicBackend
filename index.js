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

const mockDatabase = [
    { id: 1, title: 'Oferta Solar', description: 'Plano com 20% de desconto' },
    { id: 2, title: 'Energia Eólica', description: 'Plano sustentável e barato' },
    { id: 3, title: 'Energia Híbrida', description: 'Melhor custo-benefício' },
  ];
  
  // Acessa via: /submit/Oferta%20Solar
  app.get('/:title', (req, res) => {
    const { title } = req.params;
  
    const filtered = mockDatabase.filter(item =>
      item.title.toLowerCase().includes(title.toLowerCase())
    );
  
    res.json(filtered);
  });
  


//--------------------> Porta de Desenvolvimento
app.listen(4000, async function () {
  console.log("teste ok")
  return "servidor rodando"
})



