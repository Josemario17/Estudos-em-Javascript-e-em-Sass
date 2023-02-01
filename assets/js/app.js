//Variaveis
//in values filds
let dataValue = document.querySelector("#dateV")    
let typeValue = document.querySelector("#typeSelect")
let named
let describeValue = document.querySelector("#textDescribe")     
let numberValue = document.querySelector("#valueThis")  
let btnFinished = document.querySelector("#btnCompleteAct")


btnFinished.addEventListener("click", function(){createDisp()})
function createDisp()
{
    if(numberValue.value == "" || describeValue.value == ""){

    }

    else{
        if(typeValue.value == 1){
            named = "Educação"
        }
        else if(typeValue.value == 2){
            named = "Lazer"
        }
    
        else if(typeValue.value == 3)
        {
            named = "Saúde"
        }
    
        else if(typeValue.value == 4)
        {
            named = "Transporte"
        }
        

        class disp{
            constructor(data, type, describe, number){
                this.data = data
                this.type = type
                this.describe = describe
                this.number = number
            }
        }
        
        let callClass = new disp(
            dataValue.value,
            named,
            describeValue.value,
            numberValue.value
        )
        
        class bd{
            constructor(){
                let id = localStorage.getItem("ID")
                if(id == null)
                {
                    localStorage.setItem("ID", 0)
                }
            }
            getproximoID(){
                let proximo = localStorage.getItem("ID")
                return parseInt(proximo) + 1
            }

            gravar(d){
                let id = this.getproximoID()
                localStorage.setItem("ID", id)
                localStorage.setItem("DESPESA  - " + id, JSON.stringify(d))
            }
        }
        let bds = new bd()
        bds.gravar(callClass)
        let listInpts = document.querySelectorAll("input")
        document.querySelector(".confirm").style.display = "grid"
        setTimeout(anime, 3200)
        function anime(){
            document.querySelector(".confirm").style.display = "none"
            for(let i = 0; i<listInpts.length; i++)
            {
                listInpts[i].setAttribute("required", "required")
                listInpts[i].value = ""
            }
        }
        for(let i = 0; i<listInpts.length; i++)
        {
            listInpts[i].removeAttribute("required")
            listInpts[i].value = ""
        }
    }
}


