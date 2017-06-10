//src
var serverIp = 'https://h12345jack.github.io/bilibili-Visualization/';

var root = document.getElementById("root");
if(!root){
    iScript = document.createElement("script");
    iScript.type = "text/javascript";
    iScript.src = serverIp + '/static/js/bundle.js';
    document.getElementsByTagName("head")[0].appendChild(iScript); 
    var btn = document.createElement("div");
    btn.setAttribute("id","root");
    var bofqi = document.getElementById("bofqi")
    bofqi.appendChild(btn)
    // document.querySelector("#bofqi").appendChild(btn)
}else{
    console.log("VIS button exists!");
}

var strVar="";
strVar += "<img src=\"https://h12345jack.github.io/bilibili-Visualization/img/loading.gif\" width=\"26\">";
var loading = document.createElement("div");
loading.setAttribute("id","my-loading");
loading.setAttribute("style","position: absolute;top: 0px;left: -80px;")
loading.innerHTML = strVar;
var bofqi2 = document.getElementById("bofqi")
bofqi2.appendChild(loading);




