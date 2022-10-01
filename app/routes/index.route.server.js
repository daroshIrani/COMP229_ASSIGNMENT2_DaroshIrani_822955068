import {router} from "express";


router.get('/', displayhomePage);
router.get('/home', displayhomePage);
router.get('/services', displayservicesPage);
router.get('/about', displayaboutPage);
router.get('/contact', displaycontactPage);
router.get('/projects', displayprojectsPage);

export default router;