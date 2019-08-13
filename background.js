let debug = true;
log = debug ? console.log.bind(null, "DEBUG: ") : ()=>{};

browser.runtime.onMessage.addListener((message, sender) => {
    log("got messsage", message);
    if (message.closeMe) {
        browser.tabs.query({currentWindow: true, active: true}).then(
          tabs=>browser.tabs.remove(tabs[0].id)
        );
    }
});
