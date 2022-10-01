// Exporting functions that the router will use to render content into the template. Content and the template both are from View folder
// Here we implement a middleware function to handle the responses
export function displayhomePage(req,res,next){
    res.render('index', {title:"Home", page:'home'});
}

export function displayaboutPage(req,res,next){
    res.render('index', {title:"About", page:'about'});
}

export function displayprojectsPage(req,res,next){
    res.render('index', {title:"Projects", page:'projects'});
}

export function displayservicesPage(req,res,next){
    res.render('index', {title:"Services", page:'services'});
}

export function displaycontactPage(req,res,next){
    res.render('index', {title:"Contact", page:'contact'});
}