let btn=document.getElementById("btn")
btn.onclick=function(){
    let valueName=document.getElementById("name").value.trim()
    let valueSurname=document.getElementById("surname").value.trim()
    let valueAge=document.getElementById("age").value.trim()


    var tr=document.createElement('tr')
    var td1=tr.appendChild(document.createElement('td'))
    var td2=tr.appendChild(document.createElement('td'))
    var td3=tr.appendChild(document.createElement('td'))

td1.innerHTML=valueName
td2.innerHTML=valueSurname
td3.innerHTML=valueAge
document.getElementById("tb").appendChild(tr)
}











