import express, {Application} from 'express'
import configs from './configs'

const app:Application=express()
const cors = require('cors');

// Allow requests from a specific domain
const corsOptions = {
  origin: '*'
};

app.use(cors(corsOptions));
var bodyParser = require('body-parser');
app.use(bodyParser.json());
configs.startServer(app)