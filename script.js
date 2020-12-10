// Write your JavaScript code here!
window.addEventListener("load", function () {
   let form = document.querySelector("form");
   form.addEventListener("submit", function (event) {
      // event.preventDefault();

      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
         response.json().then(function (json) {
            console.log(json)
            let container = document.getElementById("missionTarget");

            let index = document.getElementById("planetDestination").value
            index = index.value;
            // console.log(`${index}`)
            container.innerHTML = 
            `<ol>
            <li>Name: ${json[index].name}</li>
            <li>Diameter: ${json[index].diameter}</li>
            <li>Star: ${json[index].star}</li>
            <li>Distance from Earth: ${json[index].distance}</li>
            <li>Number of Moons: ${json[index].moons}</li>
         </ol>
         <img src="${json[index].image}}"></img>`;
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
                     alert("Incorrect data type.");
      
            } else if (fuelLevel.value < 10000) {
         
                     faultyItems.style.visibility = "visible";
                     pilotStatus.innerHTML = (`Pilot ${pilotName.value} is ready.`);
                     copilotStatus.innerHTML = (`Co-pilot ${copilotName.value} is ready.`);
                     fuelStatus.innerHTML = (`Fuel level too low for launch.`);
                     launchStatus.style.color = "red";
                     launchStatus.innerHTML = (`Shuttle not ready for launch.`);
                           
               } else if (cargoMass.value > 10000) {
                     faultyItems.style.visibility = "visible";
                     pilotStatus.innerHTML = (`Pilot ${pilotName.value} is ready.`);
                     copilotStatus.innerHTML = (`Co-pilot ${copilotName.value} is ready.`);
                     cargoStatus.innerHTML = (`Cargo mass too much for launch.`);
                     launchStatus.style.color = "red";
                     launchStatus.innerHTML = (`Shuttle not ready for launch.`);
                        
                   } else {
                        fuelStatus.innerHTML = (`Fuel level high enough for launch.`);
                        cargoStatus.innerHTML = (`Cargo mass low enough for launch.`);
                        faultyItems.style.visibility = "visible";
                        launchStatus.style.color = "green";
                        launchStatus.innerHTML = (`Shuttle ready for launch.`);
      };
                           event.preventDefault();
   });
});

