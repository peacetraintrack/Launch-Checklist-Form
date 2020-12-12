// Write your JavaScript code here!
window.addEventListener("load", function () {
   let form = document.querySelector("form");
   form.addEventListener("submit", function (event) {
      event.preventDefault();

      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
         response.json().then(function(json) {
            console.log(json);
            const destination = document.getElementById("missionTarget");
            
            destination.addEventListener("load", function () {
               
               missionTarget.innerHTML = `
               <ol>
               <li>Name: ${json[2].name}</li>
               <li>Diameter: ${json[2].diameter}</li>
               <li>Star: ${json[2].star}</li>
               <li>Distance from Earth: ${json[2].distance}</li>
               <li>Number of Moons: ${json[2].moons}</li>
                  
               <img src=${json[2].image} height=250></img>
                 
               `;
            });
         });
      });





      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");

      let faultyItems = document.getElementById("faultyItems");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let launchStatus = document.getElementById("launchStatus");

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required.");

      } else if ((isNaN(pilotName.value) === false) || isNaN(copilotName.value) === false || isNaN(Number(fuelLevel.value)) || isNaN(Number(cargoMass.value))) {
         alert("Make sure to enter valid information for each field.");

      } else if (fuelLevel.value < 10000 && cargoMass.value > 10000) {
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = (`Pilot ${pilotName.value} is ready.`);
         copilotStatus.innerHTML = (`Co-pilot ${copilotName.value} is ready.`);
         fuelStatus.innerHTML = (`Fuel level too low for launch.`);
         launchStatus.style.color = "red";
         launchStatus.innerHTML = (`Shuttle not ready for launch.`);
         cargoStatus.innerHTML = (`Cargo mass too much for launch.`);

      } else if (fuelLevel.value > 10000 && cargoMass.value > 10000) {
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = (`Pilot ${pilotName.value} is ready.`);
         copilotStatus.innerHTML = (`Co-pilot ${copilotName.value} is ready.`);
         cargoStatus.innerHTML = (`Cargo mass too much for launch.`);
         launchStatus.style.color = "red";
         launchStatus.innerHTML = (`Shuttle not ready for launch.`);
         fuelStatus.innerHTML = (`Fuel level high enough for launch.`);

      } else if (fuelLevel.value > 10000 && cargoMass.value < 10000) {
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = (`Pilot ${pilotName.value} is ready.`);
         copilotStatus.innerHTML = (`Co-pilot ${copilotName.value} is ready.`);
         cargoStatus.innerHTML = (`Cargo mass low enough for launch.`);
         launchStatus.style.color = "green";
         launchStatus.innerHTML = (`Shuttle ready for launch.`);
         fuelStatus.innerHTML = (`Fuel level high enough for launch.`);

      } else if (fuelLevel.value < 10000 && cargoMass.value < 10000) {
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = (`Pilot ${pilotName.value} is ready.`);
         copilotStatus.innerHTML = (`Co-pilot ${copilotName.value} is ready.`);
         cargoStatus.innerHTML = (`Cargo mass low enough for launch.`);
         launchStatus.style.color = "red";
         launchStatus.innerHTML = (`Shuttle not ready for launch.`);
         fuelStatus.innerHTML = (`Fuel level too low for launch.`);

      };
      event.preventDefault();
   });
});


