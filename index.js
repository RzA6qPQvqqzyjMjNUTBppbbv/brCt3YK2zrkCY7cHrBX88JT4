function theme(){
    if(document.body.style.backgroundColor == "rgb(255, 255, 255)"){  
        document.body.style.backgroundColor = "rgb(46, 46, 49)";
        document.getElementById("title").style.color = "#FFF";
        document.getElementById("theme").style.color = "rgb(46, 46, 49)";
    } else {
       document.body.style.backgroundColor = "#FFF"
       document.getElementById("theme").style.color = "#FFF";
       document.getElementById("title").style.color = "rgb(46, 46, 49)"
    }
}
