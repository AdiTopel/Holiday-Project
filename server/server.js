const app = require('./app')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({path: "./.env"});
const DB_LOCAL_ENDPOINT = process.env.DB_LOCAL_ENDPOINT;

mongoose.connect(DB_LOCAL_ENDPOINT)
.then((connect)=>console.log('Connected to mongoose.'))
.catch((error)=> console.log(error))



const PORT = process.env.PORT || 3003;
app.listen(PORT, ()=> console.log(`Running on port ${PORT}`));

console.log('I havnt cried but my brain is soup.')