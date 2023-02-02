

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
    document.querySelector("body").className = "default"
 }

labelList[1].onclick = function(){
        document.querySelector("body").className = "darkmode"
    }





    if(document.querySelectorAll("#root").length > 0)
    {
        document.querySelector("#root").onload = function(){
            if(document.querySelectorAll(".preload").length > 0)
            {
            setTimeout(Step2, 6500)
               
            }
        
            else{
                document.querySelectorAll(".container")[0].style.display = "block"
            }
            function Step2(){
                
                    document.querySelectorAll(".preload")[0].style.display = "none"
                    document.querySelectorAll(".container")[0].style.display = "block"
                } 
         }    
    }
    
    