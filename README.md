# Jade.js
Warning: Minified version is not going to be updated any more and is hard to understand and use. Also, this js library is untested.
#
#
# INTRODUCTION TO JADE.JS
Jade.js is a JS library meant to modify the DOM.
Currently it is only at rawgit. The link is:
```html
<script src = "https://raw.githubusercontent.com/coder102510/Jade.js/master/Jade.js"></script>
```
For minified version:
```html
<script src = "https://raw.githubusercontent.com/coder102510/Jade.js/master/Jade.min.js"></script>
```
First do the import (websites):
```javascript
import "Jade" from "Jade.js";
```
Basic code in Jade.js:
```javascript
//query selector
var h1 = $("h1 > h1");
$html(h1, "Hello");
//id selector
var h1 = $d("h1");
$html(h1, "Hello");
//class selector
var h1 = $c(".h1");
$html(h1, "Hello");
//tag selector
var h1 = $t("h1");
$html(h1, "Hello");
```
Explanation: Replaces html of element based on selector to 2nd parameter. The next example adds html to the selected element: 
```javascript
$renderHTML("Hello World!", $("h1"))
```
A dynamic font color style changing example:
```javascript
$style($("p"), "color", () => Math.random() * 360 + 90);
```
Explanation: Gets all the p elements and makes their font color random * 360 + 90 (done by the arrow function in the 3rd parameter).
#
To create DOM events, use this syntax:
```javascript
var sel = new SelectAndExecute("#elmid", "click", () => {
  document.write("Clicked!")
});
sel.finish();
```
To add multiple events to the same element, use this syntax:
```javascript
var sel = new SelectAndExecute("#id", {
  events: [
    "click",
    "mouseover"
  ], 
  functions: [
    function() {
      document.write("Clicked!");
    }, 
    function() {
      document.write("Mouseover!")
    }
  ]
});
sel.finish();
```
#
AJAX: 
```javascript
fetchFile("demofile.txt", {
  method:"get",
  async:true
}).then(() => { document.write("Success!") })
.catch(() => { document.write("Failure!") });
```
This code supports the Promise API. If you are not familliar with the Promise API, use this:
```javascript
$.ajax({
  url:"demofile.txt",
  method:"get",
  async:true,
  data:"",
  onReady:function() {
    document.write(xhttp.responseText);
  },
  onError:function() {
    document.write("AJAX not loading.");
  }
})
```
The first function is the success code and the second function is the error code. The syntax is simillar to JQuery.ajax({}). Also, to access the XMLHttpRequest properties, you use the variable ```xhttp```.
Another AJAX method is this:
```html
<html>
<body data-includeHTML="demohtmlfile.html">
<script>
  $.load(function() {
    document.write("Loaded!");
  });
</script>
</body>
</html>
```
This method "loads" an HTML document add adds its content to your HTML page, starting with where you include the attribute "data-includeHTML". The attribute "data-includeHTML" has to have a value that ends with ".html",".xhtml",etc.
#
Also, you can run slideshows like so:
```javascript
$slideshow(".container", 1000);
```
You can also insert nodes inside of the html document:
```javascript
var node1 = $makeElement("p");
var node2 = $makeElement("h1");
$placeNode($("h1"), node1, node2);
```
It works like document.element.insertBefore(newnode, oldnode);
#
With Jade.js, you can parse or stringify JSON and parse XML:
```javascript
var pjson = $parseJSON({"name":"Danny"}, (key, value) => {
  if (key === "name") {
    document.write(value)
  }
}, () => {
  console.log("JSON PARSED");
});
var sjson = $stringifyJSON({"JSON":"JSON"}, () => {
  console.log("JSON Stringified!");
})
var pxml = $parseXML("<xml></xml>", () => {
  console.log("XML PARSED!");
});
document.write(pjson + "<br>" + sjson + "<br>" + pxml);
```
Explanation: The first function is the key:value function and the second function is the callback for $parseJSON. For $stringifyJSON, the function is the callback. For all three, the first parameter is the thing to be parsed or stringified.
#
Error handling:
```javascript
$checkForErrors(() => {
  doocument.write("Checking For Errors!")
  //expected output in console: "Uncaught "doocument" is not defined"
});
```
#
# Jade.js Website Example
```html
<!doctype html>
<html>
  <body>
    <script src = "https://raw.githubusercontent.com/coder102510/Jade.js/master/Jade.js"></script>
    <script>
      import "Jade" from "Jade.js";
      $checkForErrors(() => {
        var body = $("body");
        var event = new SelectAndExexcute(body, "load", () => {
          $renderHTML("<h1>Jade.JS</h1>", body);
          $style(body, "font-size", function() {
            return Math.random * 360 + 90 + "%";
          });
          var h2 = $makeElement("h2");
          $renderHTML("A JS Library to modify the DOM.", h2);
          appendNode(h2);
          var h2event = new SelectAndExecute(h2, {
            events: [
              "click",
              "mouseover"
            ],
            functions: [
              () => {
                window.location.href = "https://github.com/coder102510/Jade.js/";
              },
              () => {
                var p = $makeElement("p");
                $renderHTML("Jade JS is a JS library meant to modify the DOM, along with other features. <br> It can do: AJAX, JSON/XML parsing and stringifying, and more!");
              }
            ]
          });
        });
        event.finish();
      });
    </script>
  </body>
</html>
```
# That's it! A short introduction to Jade.js! Hope you liked it!
