import {Router} from "express";
// Importing the functions from controller to run here
import { displayaboutPage, displayhomePage, displayservicesPage, displaycontactPage, displayprojectsPage, displayresumeMe } from "../controllers/index.controller.server.js";

const indexRouter = Router();

// setting the functions to run from the controllers as the router is directed to specific URL's
indexRouter.get('/', displayhomePage);
indexRouter.get('/home', displayhomePage);
indexRouter.get('/services', displayservicesPage);
indexRouter.get('/about', displayaboutPage);
indexRouter.get('/contact', displaycontactPage);
indexRouter.get('/projects', displayprojectsPage);
indexRouter.get('/resumeMe', displayresumeMe);

// exporting the router to be used in app.js
export default indexRouter;