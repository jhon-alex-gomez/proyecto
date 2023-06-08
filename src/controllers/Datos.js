const model = require('../models/Datos')


exports.getData = (req, res) => {
    model.find({}, (err, docs) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error al obtener los datos');
      } else {
        console.log(docs); // Imprimir los datos en la consola
        res.send({
          docs
        });
      }
    });
  };
    
  exports.insertData = (req, res) =>{
    const data = req.body
    model.create(data, (err, docs)=>{
        res.send({data: docs})
    });
}