let debug = false;
debugLog = debug ? console.log.bind(null, "DEBUG: ") : ()=>{};

browser.commands.onCommand.addListener(function(command) {
  debugLog(command);
  if (command == "_close_current_tab") {
    browser.tabs.query({currentWindow: true, active: true}).then(
      tabs=>browser.tabs.remove(tabs[0].id)
    );
  }
});
