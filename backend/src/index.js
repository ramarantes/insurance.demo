const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
var _ = require('lodash');

const app = express();

const insurances = [];
var sequencial = 2;

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));
  

app.get('/', (req, res) => {
    const qs = insurances.map(q => ({
      cod: q.cod,
      insType: q.insType,
      objSegurado: q.objSegurado,
      userName: q.userName,
    }));
    res.send(qs);
  });
  
  // get a specific question
  app.get('/:id', (req, res) => {
    const insu = insurances.filter(q => (q.cod === parseInt(req.params.id)));
    if (insu.length > 1) return res.status(500).send();
    if (insu.length === 0) return res.status(404).send();
    res.send(insu[0]);
  });
  
  // insert a new question
  app.post('/', (req, res) => {
    const newInsurance = {
      ...req.body, cod:sequencial
    };
    insurances.push(newInsurance);
    //console.log(questions.map(x => `question: ${x.title}`));
    sequencial = sequencial+1;
    res.status(200).send();
  });

    // insert a new question
    app.put('/', (req, res) => {
      var index = _.findIndex(insurances, {cod: req.body.cod});
      insurances[index] = req.body;
      // insurances.splice(index, 1, req.body);
      // insurances.push(newInsurance);
      //console.log(questions.map(x => `question: ${x.title}`));
      res.status(200).send();
    });
  
    app.post('/login', (req, res) => {
      res.json({token: `${req.body.username}${req.body.password}`});
      res.status(200).send();
    });
  
  // start the server
  app.listen(8081, () => {
    console.log('listening on port 8081');
  });
