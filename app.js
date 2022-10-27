const vehicle = document.querySelector(".vehicles")
const item = document.querySelectorAll(".item")
const first = document.getElementById("first") 
const second = document.getElementById("second") 

function showVehicle(){
    vehicle.classList.toggle("opiner")
   
}
item[0].addEventListener("click", showVehicle)

item[0].addEventListener("click", ()=>{
    second.classList.toggle("d_block")
    first.classList.toggle("d_none")
})

