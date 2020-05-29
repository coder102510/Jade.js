# Jade.js
Warning: This js library is untested!
#
#
# INTRODUCTION
Jade.js is a JS library meant to modify the DOM.
Currently it is only rawgit. The link is:
```html
<script src = "https://raw.githubusercontent.com/coder102510/Jade.js/master/Jade.js"></script>
```
First do the import (websites):
```javascript
import "Jade" from "Jade.js"
```
Basic code in Jade.js:
```javascript
$html($("h1"), "Hello");
```
Explanation: This code gets all the h1's and changes their html to "Hello". Or you can do this which adds "Hello World" to each h1 tag:
```javascript
$renderHTML("Hello World!", $("h1"))
```
A dynamic font color style changing example:
```javascript
$style($("p"), "color", () => Math.random() * 360 + 90);
```
Explanation: Gets all the p elements and makes their font color random.
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
})
```
#
AJAX: 
```javascript
$.ajax("demofile.txt", {
  credidentials:"include"
}).then((res) => response.json()).then((res) => document.write(res.exampleobject.name)).catch(() => console.log());
```
This is simillar to the Fetch API, in fact, the function $.ajax returns a fetch request! Here is another AJAX example:
```javascript
ajax.ajax({
  url:"demofile.txt",
  method:"get",
  async:true,
  data:"",
  onReady:function() {
    code
  },
  onError:function() {
    code
  }
})
```
The first function is the success code and the second function is the error code. The syntax is simillar to JQuery.ajax({}). Another AJAX method is this:
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
  console.log("JSON PARSED")
});
var sjson = $stringifyJSON({"JSON":"JSON"}, () => {
  console.log("JSON Stringified!")
})
var pxml = $parseXML("<xml></xml>", () => {
  console.log("XML PARSED!")
});
document.write(pjson + "<br>" + sjson + "<br>" + pxml)
```
Explanation: The first function is the key:value function and the second function is the callback for $parseJSON. For $stringifyJSON, the function is the callback. For all three, the first parameter is the thing to be parsed or stringified.
#
#
# Thats it! A short introduction to Jade.js! Hope you liked it!
