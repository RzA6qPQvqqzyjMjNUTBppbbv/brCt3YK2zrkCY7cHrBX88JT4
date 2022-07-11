function main(){
    if(!localStorage.getItem("theme")){
        document.body.style.backgroundColor = "#FFF"
        document.getElementById("theme").style.color = "#FFF";
        document.getElementById("title").style.color = "rgb(46, 46, 49)"
        return
    }
    if(localStorage.getItem("theme") == "black"){
        document.body.style.backgroundColor = "rgb(46, 46, 49)";
        document.getElementById("title").style.color = "#FFF";
        document.getElementById("theme").style.color = "rgb(46, 46, 49)";
        return
    }
}
function theme(){
    if(document.body.style.backgroundColor == "rgb(255, 255, 255)"){  
        localStorage.setItem("theme", "black");
        document.body.style.backgroundColor = "rgb(46, 46, 49)";
        document.getElementById("title").style.color = "#FFF";
        document.getElementById("theme").style.color = "rgb(46, 46, 49)";
    } else {
        localStorage.setItem("theme", "white")
       document.body.style.backgroundColor = "#FFF"
       document.getElementById("theme").style.color = "#FFF";
       document.getElementById("title").style.color = "rgb(46, 46, 49)"
    }
}
