// Write your JavaScript code here!
window.addEventListener("load", function () {
   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function (event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");

      
      // fuelCargoField(fuelLevelInput, cargoMassInput);
   });
});



// function fuelCargoField(fuelLevelInput, cargoMassInput) {
//    if (isNaN(fuelLevelInput) || isNaN(cargoMassInput)) {
//          alert("Make sure to enter valid information for each field!")
//    }
//    if (fuelLevelInput < 10000 || cargoMassInput > 10000) {
//       faultyItems.style.visibility = "visible"
//       launchStatus.style.backgroundColor = "red"
//       launchStatus.innerHTML = "Shuttle not ready for launch"
//    } else {
//       launchStatus.style.backgroundColor = "green"
//       launchStatus.innerHTML = "Shuttle is ready for launch"
//    }
// };


//obtain a reference to the button element
//let form_submit = document.getElementById("formSubmit");
//form_submit.addEventListener("click", function(event){

//});


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[index].name}</li>
   <li>Diameter: ${json[index].diameter}</li>
   <li>Star: ${json[index].star}</li>
   <li>Distance from Earth: ${json[index].distance}</li>
   <li>Number of Moons: ${json[index].moons}</li>
</ol>
<img src="${https://www.nasa.gov/sites/default/files/images/587837main_Kepler16_transit_art2_full.jpg}">

