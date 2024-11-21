document.getElementById("calculateBtn").onclick = function(){

const height = document.getElementById("heightInput").value
const weight = document.getElementById("weightInput").value
const result = document.getElementById("result")

const bmi = weight / (height * height)

let category = ""
if (bmi < 18.5) category = "nepietiekams svars"
else if (bmi < 25) category = "Normāls svars"
else if (bmi < 30) category = "Liekais svars"
else category = "Aptaukošanās"

function processInput(){
            
    output.innerHTML = [result.value]
}


}