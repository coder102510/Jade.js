var jadescript=document.querySelectorAll("script[type=\"text/jade\"]");  

if (jadescript.innerHTML=" ") {
    throw "Nothing can be executed in this environment."
} else {
    addEventListener("load",jadescript.innerHTML)
}

class $SelectAndExecute {
    constructor (elmid,event,code) {
        this.elmid=elmid;
        this.event=event;
        this.code=code;
    }
    getElmidAndEval(elmidl,eventl,codel) {
        var elms = document.querySelectorAll(elmidl);
        if (elms.hasAttributes("data-DOMEvent")) {
            elms.addEventListener(eventl, codel);
        }
    }
    finish() {
        getElmidAndEval(this.elmid, this.event, this.code);
    }
}
function $(elm) {
    if (typeof elm==="object") {
        return [elm]
    } else {
        return document.querySelectorAll(elm);
    }
}
var $makeElement=function(elm) {
    var newelm=document.createElement(elm);
    return newelm;
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
    document.getElementById("#append").appendChild(newnode);
}
var $empty=function(elm) {
    var elms;
    if (typeof elm=="function") {
        elms=addEventListener("load", elm);
        eval("elms");
        elms.innerHTML=" ";
    } else {
        var elms=document.getElementsByTagName(elm),i=0,l=elem.length;
        for (;i<l;i++) {
            elms[i].innerHTML=" ";
        }
    }
}
var $={};
$.ajax=function(url,options) {
    if (typeof url==="object") {
        options=url;
        url=undefined;
    }
    options=options||{};
    if (options.hasOwnProperty("url")&&options.hasOwnProperty("method")&&options.hasOwnProperty("async")&&options.hasOwnProperty("onReady")&&options.hasOwnProperties("onError")&&options.hasOwnProperty("data")) {
        var xhttp;
        if (window.XMLHttpRequest) {
            xhttp=new XMLHttpRequest();
        } else {
            xhttp=new ActiveXObject("Microsoft.XMLHttp");
        }
        xhttp.onreadystatechange=function() {
            if (this.readyState==4&&this.status==200) {
                options.onReady();
            } else {
                options.onError();
            }
        }
        xhttp.open(options.method,options.url,options.async);
        xhttp.send(options.data);
    } else {
        throw new Error("Your AJAX Request Does Not Have the Correct Properties.")
    }
}
$.load=function(cb) {
    var i,elm,tags,file;
    tags=document.getElementsByTagName("*");
    for (i in tags) {
        elm=tags[i];
        file=elm.getAttribute("data-includeHTML")
    }
}
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
    return pjson
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
