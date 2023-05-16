
//SE CONECTA EL SERVER CON MONGO DB
const mongoose = require("mongoose");

const { NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE } = process.env;

const MONGODB_URI = 'mongodb+srv://usario:clave@cluster0.wtvf2.mongodb.net/DBmanglar?retryWrites=true&w=majority';



mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
  .then(db => console.log("DB Mongo is connected"))
  .catch(err => console.error(err));


