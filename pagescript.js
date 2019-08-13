let debug = true;
log = debug ? console.log.bind(null, "DEBUG: ") : ()=>{};

let closingTab = false;
window.addEventListener('keydown', event => {
  log(event);
  if(event.altKey && event.key=="w"){
    browser.runtime.sendMessage({closeMe: true});
  }
});
