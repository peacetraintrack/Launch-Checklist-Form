// Write your JavaScript code here!
window.addEventListener("load", function () {
   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function (event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");

      nameInput(pilotNameInput, copilotNameInput); 
      fuel(fuelLevelInput, cargoMassInput);
   });
});

function nameInput(pilotNameInput, copilotNameInput) {
   if (pilotNameInput.value === "" || copilotNameInput.value === "") {
      alert("All fields are required!");
   }
}

function fuel(fuelLevelInput, cargoMassInput) {
   if (isNaN(fuelLevelInput) || isNaN(cargoMassInput)) {
         alert("Invalid entry. Please enter a number!")
   }
};


//obtain a reference to the button element
//let form_submit = document.getElementById("formSubmit");
//form_submit.addEventListener("click", function(event){

//});


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
