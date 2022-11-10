let btn=document.getElementById("btn")
let name=document.getElementById("name")
let surname=document.getElementById("surname")
let age=document.getElementById("age")
let table=document.getElementById("tab")
let td1=document.getElementById("td1")
let td2=document.getElementById("td2")
let td3=document.getElementById("td3")

btn.addEventListener("click",function(){
    let valueName=name.value.trim()
    let valueSurname=surname.value.trim()
    let valueAge=age.value.trim()

  
    td1.innerText=valueName
    td2.innerText=valueSurname
    td3.innerText=valueAge
         table.append(td1,td2,td3)
  

   

})