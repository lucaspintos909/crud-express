import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();




//Conexion a la bd
const mongoose = require('mongoose');

/* const uri = 'mongodb://localhost:27017/crud-mevn'; */
//conexxion en la nube


const uri = 'mongodb+srv://lucaspintos909:bicyclestandar@clusterprueba.7nsj3.gcp.mongodb.net/notas-crud?retryWrites=true&w=majority';

const options = {useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true};

mongoose.connect(uri, options).then(
  () => { console.log('Conectado a DB') },
  err => { console.log(err) }
);


// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, 'public')));

// Rutas
/* app.get('/', (req, res) => {
  res.send('Hola Perri!');
}); */
app.use('/api', require('./routes/nota'));

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3025);
app.listen(app.get('puerto'), () => {
  console.log('Servidor local en el puerto: '+ app.get('puerto'));
});
