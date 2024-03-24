let firstPassenger = 70;
let secondPassenger = 30;

let Total_Passenger = document.getElementById("TP");
let Remaining_Passenger = document.getElementById("RP");
let addButton = document.getElementById("Add_PSG");
let removeButton = document.getElementById("RM-PSG");


addButton.addEventListener("click", () =>{
    let sumofPsg = firstPassenger + secondPassenger;
    Total_Passenger.textContent ="Total Passenger: " + sumofPsg;
    Remaining_Passenger.textContent = "Remaining Passenger: " + (100 - sumofPsg);
});

removeButton.addEventListener("click", () =>{
    Total_Passenger.textContent = "Total Passenger: ", "";
    Remaining_Passenger.textContent = "Remaining Passenger: " ,"";
});

