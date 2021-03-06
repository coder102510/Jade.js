/* Jade JS library
*  JS Library for DOM Manipulation
*  (c) Copyright Eshanth B.G.
*/
//exerpt from jquery.js
(function(global,factory) {
    "use strict";
    if (typeof module==="object"&&typeof module.exports==="object") {
        module.exports=global.document ? factory(global,true) : function(w) {
            if (!w.document) { throw "JadeJS requires a window with a document." }
            return factory(w);
        };
    } else {
        factory(global);
    }
})(typeof window!=="undefined" ? window: this, function() {
//end exerpt from jquery.js
    var scripts=document.scripts;
    var i=0;
    var l=scripts.length;
    //exerpt from stack overflow
    String.prototype.selectChars=function(indexes) {
        var returned=[];
        for(var i = 0; i < indexes.length; i++) {
            returned.push(this.charAt(indexes[i]));
            var arrtostr=returned.toString();
            var totrim=" ";
            arrtostr.replace(",",totrim.trim());
        }
        return arrtostr;
    }
    //end exerpt from stack overflow
    for (;i<l;i++) {
        if (scripts[i].innerHTML.selectChars([0,26])==="import \"Jade\" from \"Jade.js\";") { 
            class $SelectAndExecute {
                constructor (elmid,event,code) {
                    this.elmid=elmid;
                    this.event=event;
                    this.code=code;
                }
                getElmidAndEval(elmidl,eventl,codel) {
                    var elms = document.querySelectorAll(elmidl);
                    if (elms.hasAttributes("data-DOMEvent")) {
                        if (typeof eventl==="object") {
                            if (eventl.hasOwnProperty("events")&&eventl.hasOwnProperty("functions")) {
                                codel===undefined;
                                eventl.events=eventl.events||[];
                                eventl.functions=eventl.functions||[];
                                for (var i=0;i<eventl.events.length;i++) {
                                    for (var j=0;j<eventl.functions.length;j++) {
                                        elms.addEventListener(eventl.events[i],eventl.functions[j]);
                                    }
                                }
                            } else {
                                throw "You do not have the correct properties to make this work."
                            }
                        } else {
                            addEventListener(eventl,codel);
                        }
                    }
                }
                finish() {
                    getElmidAndEval(this.elmid,this.event,this.code);
                }
            }
            function $(elm) {
                if (typeof elm==="object") {
                    return [elm];
                } else {
                    return document.querySelectorAll(elm);
                }
            }
            function $d(elm) {
                $("#"+elm);
            }
            function $c(elm) {
                $("."+elm);
            }
            function $t(elm) {
                $(""+elm)
            }
            var $makeElement=function(elm) {
                var newelm;
                if (Array.isArray(elm)) {
                    elm=elm||[];
                    for(var i=0;i<elm.length;i++) {
                        newelm=document.createElement(elm[i]);
                        return newelm;
                    }
                } else {
                    newelm=document.createElement(elm);
                    return newelm;
                }
            }
            var $style=function(elm,prop,val){
                var elms;
                if (typeof elm=="function") {
                    elms=addEventListener("load", elm);
                    eval("elms");
                } else {
                    elms=document.getElementsByTagName(elm);
                }
                if (elms.hasAttributes("data-CSS")) {
                    if (prop==="undefined"&&val===undefined) {
                        return elms.style.prop.val;
                    } else if (prop===undefined) {
                        return elms.style.prop;
                    } else {
                        for (var i=0;i<elms.length;i++) {
                            elms[i].style.setProperty(prop, val);
                        }
                    }
                }
            }
            var $addClass=function(elm) {
                var currarg=1,arglen=arguments.length,args=arguments;
                if (typeof elm=="function") {
                    elms=addEventListener("load", elm);
                    eval("elms");
                } else {
                    elms=document.querySelectorAll(elm);
                }
                if (elms.hasAttributes("data-Class")) {
                    for (;currarg<arglen;currarg++) {
                        elem.classList.add(args[currarg]);
                    }
                }
            }
            var $removeClass=function(elm) {
                var currarg=1,arglen=arguments.length,arg=arguments;
                if (typeof elm=="function") {
                    elms=addEventListener("load", elm);
                    eval("elms");
                } else {
                    elms=document.querySelectorAll(elm);
                }
                if (element.hasAttributes("data-Class")) {
                    for (;currarg<arglen;currarg++) {
                        elms.classList.remove(arg[currarg]);
                    }
                }
            }
            var $toggleClass=function(elm) {
                if (typeof elm=="function") {
                    elms=addEventListener("load", elm);
                    eval("elms");
                } else {
                    elms=document.querySelectorAll(elm);
                }
                var curr=1;
                var next=curr+1;
                var prev=curr-1;
                var args=arguments,arglen=arguments.length; 
                if (elms.hasAttributes("data-Class")) {
                    for (;curr < arglen; curr++) {
                        if (element.classList.contains(args[curr])) {
                            if (curr==arglen) {
                                curr=0;
                                prev=curr-1;
                                next=curr+1
                            } else {
                                elms.classList.remove(args[prev]);
                                elms.classList.remove(args[curr]);
                                elms.classList.add(args[next]);
                            }
                        }
                    }
                }
            }
            var $slideshow=function(elm,ms,rfunc) {
                var slideshow={},i=0,elms=$(elm),l=elms.length;
                if (typeof elm=="function") {
                    addEventListener("load",elm);
                }
                slideshow.curr=1;
                slideshow.x=elms;
                slideshow.ondisplaychange=rfunc;
                if (!isNan(ms)||ms==0) {
                    slideshow.milliseconds=ms;
                } else {
                    slideshow.milliseconds=1000;
                }
                slideshow.start=function() {
                    slideshow.display(slideshow.current);
                    if (slideshow.ondisplaychange) {
                        slideshow.ondisplaychange();
                    } 
                    if (slideshow.milliseconds>0) {
                        clearTimeout(slideshow.timeout);
                        slideshow.timeout=setTimeout(slideshow.next,slideshow.milliseconds);
                    }
                }
                slideshow.next=function() {
                    slideshow.curr++;
                    if (slideshow.current>slideshow.x.length) {
                        slideshow.current=1;
                    }
                    slideshow.start();
                }
                slideshow.previous=function() {
                    slideshow.curr--;
                    if (slideshow.curr<1) {
                        slideshow.curr=slideshow.x.length;
                        slideshow.start();
                    }
                    slideshow.display=function(n) {
                        $style(slideshow.x,"display","none");
                        $style(slideshow.x[n-1],"display","block");
                    }
                    slideshow.start();
                    return slideshow;
                }
            }
            var $typeEffect=function(txt,ms,cont) {
                var i=0,text=txt,l=text.length;
                if (typeof cont=="function") {
                    addEventListener("load",cont);
                }
                if (i<l) {
                    document.getElementById(cont).innerHTML+=text.charAt(i);
                    i++;
                    setTimeout($typeEffect,ms)
                }
            }
            var $html=function(elm, nval=undefined) {
                var elem;
                if (typeof elm==="function") {
                    addEventListener("load", elm);
                    if (nval===undefined) {
                        return elm.innerHTML;
                    } else {
                        elm.innerHTML=nval;
                    }
                } else {
                    elm=undefined;    
                    var elem=this[0] || {}, i=0, l=elem.length;
                    if (nval===undefined) {
                        return elem.innerHTML;
                    } else {
                        for(;i<l;i++) {
                            if (elem.nodeType===1) {
                                elem.innerHTML=nval;
                            }
                        }
                        elem=0;
                        if (elem) {
                            empty(this);
                            appendNode(nval);
                        }
                    }
                }
            }
            var $renderHTML=function(html,elm) {
                var elem;
                if (typeof elm="function") {elem=elm();}
                else {elem=document.querySelectorAll(elm);}
                if (typeof html==="string") {
                    elem.innerHTML+=html;
                } else {
                    throw "You need to make the \"Html\" parameter a string";
                }
            }
            var $mouseX=function(elm) {
                var elms;
                if (typeof elm=="function") {
                    elms=addEventListener("load", elm);
                    eval("elms");
                } else {
                    elms=document.querySelectorAll(elm);
                }
                return elm.clientX;
            }
            var $mouseY=function(elm) {
                var elms;
                if (typeof elm=="function") {
                    elms=addEventListener("load", elm);
                    eval("elms");
                } else {
                    elms=document.querySelectorAll(elm);
                }
                return elm.clientY;
            }
            var $placeNode=function(elm,newnode, oldnode) {
                var elms;
                if (typeof elm=="function") {
                    elms=addEventListener("load", elm);
                    eval("elms");
                } else {
                    elms=document.querySelectorAll(elm);
                }
                elm.insertBefore(newnode,oldnode);
            }
            var $appendNode=function(newnode) {
                var elms;
                if (typeof elm=="function") {
                    elms=addEventListener("load", elm);
                    eval("elms");
                } else {
                    elms=document.querySelectorAll(elm);
                }
                document.body.appendChild(newnode);
            }
            var $empty=function(elm) {
                var elms;
                if (typeof elm=="function") {
                    elms=addEventListener("load", elm);
                    eval("elms");
                    elms.textContent=" ";
                } else {
                    var elms=document.getElementsByTagName(elm),i=0,l=elem.length;
                    for (;i<l;i++) {
                        elms[i].textContent=" ";
                    }
                }
            }
            var ajaxInit=function(c) {
                return new Promise(function(resolve) {
                    resolve(c);
                });
            },xml=function() {
                if (window.XMLHttpRequest) { return new XMLHttpRequest() }
                else { return new ActiveXObject("Microsoft.XMLHTTP") }
            },xhttp;
            async function fetchFile(url,options) {
                options=options||{};
                var prom=await ajaxInit(function() {
                    xhttp=xml();
                    if (options) {
                        if (options.method&&options.async&&options.data&&options!=undefined) {
                            if (options.setCSP) {
                                var csp = document.createElement("meta");
                                csp.setAttribute("http-equiv","Content-Security-Policy");
                                csp.setAttribute("content",options.setCSP);
                            } if (options.setScriptNonce) {
                                scripts[i].setAttribute("nonce",options.setScriptNonce);
                            } if (options.JS) {
                                if (options.JS===true) { this.responseText() }
                                else { console.error("You are using the wrong property."); }
                            }
                            xhttp.open(options.method,url,options.async);
                            xhttp.send(options.data);
                            }
                        } else {
                            throw "You have the wrong properties or the options parameter is not defined.";
                        }
                    } else {
                        xhttp.open("GET",url,true);
                        xhttp.send(undefined);
                    }
                });
                c();
                return prom;
            }
            var $={};
            $.ajax=function(url, options) {
              if (typeof url==="object") {
                options=url;
                url=undefined;
              }
              options=options||{};
              if (options.hasOwnProperty("url")&&options.hasOwnProperty("method")&&options.hasOwnProperty("async")&&options.hasOwnProperty("data")&&options.hasOwnProperty("onReady")&&options.hasOwnProperty("onError")) {
                xhttp=new XMLHttpRequest();
                if (window.ActiveXObject) {xhttp=new ActiveXObject("Microsoft.XMLHTTP")}
                xhttp.onreadystatechange=function() {
                    if (this.readyState===4&&this.status===200) {
                        options.onReady();
                    } else {
                        options.onError();
                    }
                    if (options.hasOwnProperty("script")) {
                        this.responseText();
                    }
                    if (options.hasOwnProperty("setCSP")) {
                        var meta=document.createElement("meta");
                        meta.setAttribute("http-equiv","Content-Security-Policy");
                        meta.setAttribute("content",options.setCSP);
                        document.head.appendChild(meta);
                    } if (options.setScriptNonce) {
                        scripts[i].setAttribute("nonce",options.setScriptNonce);
                    } if (options.JS) {
                        if (options.JS===true) { this.responseText() }
                        else { console.error("You are using the wrong property."); }
                    }  
                xhttp.open(options.method,options.url,options.async);
                xhttp.send(options.data);
              }
                }
                if (options.hasOwnProperty("setCSP")) {
                    var meta=document.createElement("meta");
                    meta.setAttribute("http-equiv","Content-Security-Policy");
                    meta.setAttribute("content",options.setCSP);
                    document.head.appendChild(meta);
                }  
                xhttp.open(options.method,options.url,options.async);
                xhttp.send(options.data);
              }
            }
            //exerpt from w3schools.com
            $.load=function(cb) {
                var i,elm,tags,file,xmlhttp;
                tags=document.getElementsByTagName("*");
                for (i in tags) {
                    elm=tags[i];
                    file=elm.getAttribute("data-includeHTML");
                    if (file) {
                        xhttp=new XMLHttpRequest();
                        xhttp.onreadystatechange=function() {
                            if (this.readyState===4) {
                                if (this.status===200) {elm.innerHTML=this.responseText;}
                                if (this.status===404) {elm.innerHTML="404: Page not found";}
                                elm.removeAttribute("data-includeHTML");
                                $.load();
                            }
                        }
                        xhttp.open("get",file,true);
                        xhttp.send();
                        return;
                    }
                }
                if (cb) cb();
            }
            //end exerpt from w3schools.com
            var $checkForErrors=function(code) {
                try {
                    code();
                } catch (e) {
                    throw new Error(e.message);
                }
            }
            var $parseJSON=function(json,parsefunc,cb) {
                var pjson=JSON.parse(json,parsefunc);
                if (cb!==undefined) {
                    cb();
                }
                return pjson;
            }
            var $stringifyJSON=function(json,cb) {
                var sjson=JSON.stringify(json);
                if (cb!==undefined) {
                    cb();
                }
                return sjson;
            }
            var $parseXML=function(xmldoc) {
                var parser = new DOMParser();
                var xml = parser.parseFromString(xmldoc, "text/xml")
                return xml;
            }
        } else {
            throw "You first need to import the Jadejs library."
        }
    }
});
