

document.getElementById("root").onload = function(){
    setTimeout(Step2, 6500)
    function Step2(){
        document.querySelectorAll(".preload")[0].style.display = "none"
        document.querySelectorAll(".container")[0].style.display = "block"
    }
 }

 document.querySelector(".btn-call-coll").onclick = function(){
    let div = document.querySelector(".collapse-md")
    if(div.style.display == "none" || div.style.display == "")
    {
        div.style.display = "flex"
        div.onmouseleave = function(){
            div.style.display = "none"
        }
    }

    else{
        div.style.display = "none"
    }
 }

 let labelList = document.querySelectorAll(".collapse-md label")
 labelList[0].onclick = function(){
        document.getElementById("root").className = "default"
 }

labelList[1].onclick = function(){
        document.getElementById("root").className = "darkmode"
    }