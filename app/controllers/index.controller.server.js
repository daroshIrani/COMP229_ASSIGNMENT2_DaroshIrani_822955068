// Exporting functions that the router will use to render content into the template. Content and the template both are from View folder

export function displayhomePage(req,res,next){
    res.render('index', {title:"Home", page:'home'});
}

export function displayhomePage(req,res,next){
    res.render('index', {title:"About", page:'about'});
}

export function displayhomePage(req,res,next){
    res.render('index', {title:"Projects", page:'projects'});
}

export function displayhomePage(req,res,next){
    res.render('index', {title:"Services", page:'services'});
}

export function displayhomePage(req,res,next){
    res.render('index', {title:"Contact", page:'contact'});
}