var system = require('system');
var page = require('webpage').create();
var args = system.args;
page.open(args[1], function(status) {
  var dlUrl = page.evaluate(function() {
    return document.getElementById('dlbutton').href;
  });
  console.log(dlUrl);
  phantom.exit();
});


