const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./api')
const bodyParser = require('body-parser')

const start = async () => {
  try {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());

    app.get('/', (req, res) => {
      res.send("<h1>API Gateway<h1>")
    })

    app.use(router)

    app.listen(5000);
  } catch (error) {
    console.log(error)
    process.exit(1)
  }

  console.log("Server running");
}

start()
