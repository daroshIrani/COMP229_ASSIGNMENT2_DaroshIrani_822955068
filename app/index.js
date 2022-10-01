
// Importing the needed modules
import express  from "express";
// Instantiating the express module to be used later as an object
const index = express();

// ES Module fix for __dirname
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

// Importing the 'router' object created in the index.route.server.js file
import indexRouter from './routes/index.route.server.js';
// telling this file to use routing logic for index.ejs file from router folder which contains the file above
index.use('/', indexRouter);

// Setting up the view engine to be using EJS
index.set('views', path.join(__dirname, '/views') );
index.set('view engine', 'ejs'); 

// Code that tells the client browser that the public folder is static so that it can be rendered on the client end
index.use(express.static(path.join(__dirname, '../public')));


export default index;