let debug = false;
log = debug ? console.log.bind(null, "DEBUG: ") : ()=>{};

let closingTab = false;

// do nothing on pagescript
