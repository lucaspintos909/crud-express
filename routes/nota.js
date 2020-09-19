import express from 'express';
const router = express.Router();

// importar el modelo nota
import Nota from '../models/nota';

// Agregar una nota
router.post('/nueva-nota', async(req, res) => {
  const body = req.body;  
  try {
    const notaDB = await Nota.create(body);
    res.status(200).json(notaDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    });
  }
});

//Get con parametros

router.get('/nota/:id', async(req, res)=>{
  const _id = req.params.id;

  try {
    
    const notaDB = await Nota.findOne({_id});

    res.json(notaDB);

  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    });
  }

});


//Get con todas las notas
router.get('/notas', async(req, res)=>{

  try {
    
    const notasDB = await Nota.find();

    res.json(notasDB);

  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    });
  }

});

// Exportamos la configuración de express app
module.exports = router;
