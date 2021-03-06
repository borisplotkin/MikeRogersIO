// Konami Code, from http://mattkirman.com/2009/05/11/how-to-recreate-the-konami-code-in-javascript/
if (window.addEventListener) {
  // create the keys and konami variables
  var keys = [],
      konami = "38,38,40,40,37,39,37,39,66,65";

  // bind the keydown event to the Konami function
  window.addEventListener("keydown", function(e){
    // push the keycode to the 'keys' array
    keys.push(e.keyCode);

    // and check to see if the user has entered the Konami code
    if (keys.toString().indexOf(konami) >= 0) {
      keys = [];
      
      // do something such as:
      (function(){
        link = document.createElement('link');
        link.rel= "stylesheet";
        link.href = "/css/konami.css";
        head  = document.getElementsByTagName('head')[0]; 
        head.appendChild(link)
      })();
    };
  }, true);
};
