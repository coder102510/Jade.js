# Jade.js
Warning: This js library is untested!
#
#
# INTRODUCTION
Jade.js is a JS library meant to modify the DOM.
If you like, you could use the jade custom attribute for scripts with jade.js 
Currently it is only rawgit. The link is:
```html
<script src = "https://raw.githubusercontent.com/coder102510/Jade.js/master/Jade.js"></script>
```
Basic code in Jade.js:
```javascript
$html($("h1"), "Hello")
```
Explanation: This code gets all the h1's and changes their html to "Hello".
A dynamic font color style changing example:
```javascript
$style($("p"), "color", function() {
  return Math.random() * 360 + 90;
});
```
Explanation: Gets all the p elements and makes their font color random.
#
AJAX: 
```javascript
var xhttp = new AJAXRequest("GET", "demo_file.txt", true, function() {
  document.write("success!");
}, function() {
  document.write("failure");
});
```
