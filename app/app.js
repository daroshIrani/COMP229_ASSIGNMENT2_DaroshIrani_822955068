
// Importing the needed modules
import { Express } from "express";
// Instantiating the express module to be used later as an object
const app = express();

// ES Module fix for __dirname
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));


// Setting up the view engine to be using EJS
app.set('views', path.join(__dirname, '/views') );
app.set('view engine', 'ejs'); 


app.use(express.static(path.join(__dirname, '../public')));