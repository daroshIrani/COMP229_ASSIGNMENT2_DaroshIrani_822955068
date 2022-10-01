import {Router} from "express";
// Importing the functions from controller to run here
import { displayaboutPage, displayhomePage, displayservicesPage, displaycontactPage, displayprojectsPage } from "../controllers/index.controller.server.js";

const router = Router();

// setting the functions to run from the controllers as the router is directed to specific URL's
router.get('/', displayhomePage);
router.get('/home', displayhomePage);
router.get('/services', displayservicesPage);
router.get('/about', displayaboutPage);
router.get('/contact', displaycontactPage);
router.get('/projects', displayprojectsPage);

export default router;