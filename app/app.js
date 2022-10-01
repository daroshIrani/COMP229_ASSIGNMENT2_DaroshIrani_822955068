
// Importing the needed modules
import express  from "express";

// Instantiating the express module to be used later as an object
const app = express();

// ES Module fix for __dirname
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

// Importing the 'router' object created in the index.route.server.js file
import router from './routes/index.route.server.js';
// telling this file to use routing logic from router folder which contains the file above
app.use('/', router);

// Setting up the view engine to be using EJS
app.set('views', path.join(__dirname, '/views') );
app.set('view engine', 'ejs'); 

// Code that tells the client browser that the public folder is static so that it can be rendered on the client end
app.use(express.static(path.join(__dirname, '../public')));


export default app;