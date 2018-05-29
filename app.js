//setup imports for dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//initialize app
const app = express();

// TODO: setup middleware


//get appt o listen on port
const port = 3000;
app.listen(port, ()=>(
  console.log("server started on port "+ port)
))
