

const mongoose = require("mongoose");

const DatosScheme = new mongoose.Schema({
  temperature: {
    type: Number,
    require: false
  },
  Humidity: {
    type: Number,
    require: false
  },
  sensors:{
    type:String,Number
  }
},

  
{
    versionKey: false,
    timestamps: true
}
);

module.exports = mongoose.model('Datos', DatosScheme);