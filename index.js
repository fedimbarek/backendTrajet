const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const  multer   = require('multer')
var bodyParser = require('body-parser');
//const port = 3000

app.use(express.json())
app.use(cors())
app.use('/picture' , express.static('picture'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.get('/', (req, res) => {
  res.send('Hello World!')
})

const userRoute =  require("./routes/user.router")

app.use('/users', userRoute)
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
      var dir = './uploads';
      if (!fs.existsSync(dir)){
          fs.mkdirSync(dir);
      }
      callback(null, dir);
  },
  filename: function (req, file, callback) {
      callback(null, file.originalname);
  }
});
var upload = multer({storage: storage}).array('files', 12);
app.post('/upload', function (req, res, next) {
  upload(req, res, function (err) {
      if (err) {
          return res.end("Something went wrong:(");
      }
      res.end("Upload completed.");
  });
})
mongoose.connect('mongodb://localhost:27017/Optitrajet' , {
  useNewUrlParser : true,
  useUnifiedTopology:true,

})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function(){
  console.log('Database connected successfully');
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})