/* Jade JS library
*  JS Library for DOM Manipulation
*  (c) Copyright Eshanth B.G.
*/
class $SelectAndExecute {
    constructor (elmid,event,code) {
        this.elmid=elmid;
        this.event=event;
        this.code=code;
    }
    getElmidAndEval(elmidl,eventl,codel) {
        var elms = document.getElementById(elmidl);
        if (elms.hasAttributes("data-power-DOM")) {
            elms.addEventListener(eventl, codel);
        }
    }
    finish() {
        getElmidAndEval(this.elmid, this.event, this.code);
    }
}
var $=function(elm) {
    if (typeof elm==="object") {
        return [elm];
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
    if (elms.hasAttributes("data-power-CSS")) {
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
    if (elms.hasAttributes("data-power-Class")) {
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
    if (element.hasAttributes("data-power-Class")) {
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
    if (elms.hasAttributes("data-power-Class")) {
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
class $AJAXRequest {
    constructor(method,file,async,readycode,errorcode,data=undefined) {
        this.method=method;
        this.file=file;
        this.async=async;
        this.data=data;
        this.readycode=readycode;
        this.errorcode=errorcode;
    }
    finish() {
        if (document.body.hasAttributes("data-power-AJAX")) {
            var xhttp;
            if (data===undefined) {
                this.method="GET";
            }
            if (window.XMLHttpRequest) {
                xhttp=new XMLHttpRequest();
            } if (window.ActiveXObject) {
                xhttp=new ActiveXObject("Microsoft.XMLHttp");
            }
            xhttp.onreadystatechange = function() {
                if (this.status===200&&this.readystate===4) {
                    addEventListener("load",this.readycode);
                } else {
                    addEventListener("load",this.errorcode)
                }
            }
           xhttp.open(this.method,this.file,this.async);
           xhttp.send(this.data);
        }
    }
}
var $includeHTML=function(cb) {
    var tags,i,l,xhttp,elm,file;
    tags=document.getElementsByTagName("*");
    l=tags.length;
    for (i=0;i<l;i++) {
        elm=z[i];
        file=elm.getAttribute("data-power-include-HTML");
        if (file) {
            xhttp=new XMLHttpRequest();
            xhttp.onreadystatechange=function() {
                if (this.readyState==4) {
                    if (this.status==200) {
                        elm.innerHTML=this.responseText;
                    } else if (this.status==404) {
                        elm.innerHTML="404: Page not found.";
                    }
                    elm.removeAttribute("data-power-include-HTML");
                    includeHTML(cb);
                }
            }
            xhttp.open("GET",file,true);
            xhttp.send();
            return;
        }
    }
    if (cb) {
        cb();
    }
}
var getServerJSON=function(file,func) {
    var xmlhttp=new AJAXRequest("GET",file,true,function() {
        func(JSON.parse(this.responseText));
    },function() {
        func(console.error("JSON not able to be parsed"));
    });
}
var $checkForErrors=function(code) {
    try {
        code();
    } catch (e) {
        throw new Error(e.message);
    }
}
var $parseJSON=function(json,parsefunc,cb) {
    JSON.parse(json,parsefunc);
    if (cb!==undefined) {
        cb();
    }
}
var $stringifyJSON=function(json,cb) {
    JSON.stringify(json);
    if (cb!==undefined) {
        cb();
    }
}