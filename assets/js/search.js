
//consultando e vendo as Despesas Guardadas
let dateC = document.querySelector("#dateC")
let typeSelectC = document.querySelector("#typeSelectC")
let valueThisC = document.querySelector("#valueThisC")
let btn = document.querySelector("#btnCompleteConsult")
let listaDespesas = new Array()


class consulta{


    validandocampos(){
        let names = ["", "Educação", "Lazer", "Saúde", "Transporte"]
        for(let i = 0; i<names.length; i++)
        {
            if(typeSelectC.value = i)
            {
                typeSelectC = names[i]
                i = names.length
            }
        }
        
        if(dateC.value == "" || ((typeSelectC == 0) || typeSelectC.value == 0) || valueThisC.value == ""){
            return false    
        }

        else{
            this.limparDados()
            return true
        }

    }

    limparDados(){
        let list = document.querySelectorAll("input")
        for(let i=0; i<list.length; i++)
        {
            list[i].value = ""
        }
    }

    lsitarDespesas(){
       
    }

    recuperarLista(){

		let id = localStorage.getItem("ID")

		//recuperar todas as despesas cadastradas em localStorage
		for(let i = 1; i <= id; i++) {

			//recuperar a despesa
			let despesa = JSON.parse(localStorage.getItem(i))

			//existe a possibilidade de haver índices que foram pulados/removidos
			//nestes casos nós vamos pular esses índices
			if(despesa === null) {
				continue
			}

			listaDespesas.push(despesa)
    }
    
		return listaDespesas
    }
}


let consulta1 = new consulta()


let body = document.querySelector("#root1")
body.onload = function(){consulta1.recuperarLista()
    
   listaDespesas.forEach(function(d){
    console.log(d)
   let linha = document.querySelector(".find").insertRow()
   linha.insertCell(0).textContent = " " + d.data
   linha.insertCell(1).textContent = " " + d.type
   linha.insertCell(2).textContent = " " + d.describe
   linha.insertCell(3).textContent = " " + d.number

   })
}
