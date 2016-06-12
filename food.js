function executeThisCodeAfterFileIsLoadedDog () { // dog food function ////////////////////

  //console.log("this.responseText", this.responseText);
  var data = JSON.parse(this.responseText); // parse the json data to readable javascript
  // console.log("data", data);
  var dogFood = document.getElementById("dogFood");  
  var dogFoodData = "";  // Empty VAR to put info in
 //////////////////////////////////////
 //Beging Looping through JSON Object//
 //////////////////////////////////////
  for (var i = 0; i < data.dog_brands.length; i++) {  // loop thru DOG_BRANDS array
    // console.log("data.dog_brands[i]", data.dog_brands[i]);
    currentFood = data.dog_brands[i];  
    dogFoodData += `<div class='dog_brand'>`;  // OPEN DIV ////////////////////////// 
    dogFoodData += `<h2>${currentFood.name}</h2>`;  // add brand name

    for (var j = 0; j < currentFood.types.length; j++){  // loop thru [TYPES array]
      // console.log("currentFood.types[j]", currentFood.types[j]);
      currentType = currentFood.types[j]; 
      dogFoodData += "<div class='type'> Type: " + currentType.type + "</div>"; //add food TYPEs
        
      for (var k = 0; k < currentType.volumes.length; k++){  // loop thru VOLUMES array (name, price)
          // console.log("currentType.volumes[k]", currentType.volumes[k]);
        currentVolume = currentType.volumes[k]; 
        dogFoodData += "<div class='price'>Price: " + currentVolume.name + " for " + currentVolume.price + "</div>"; // add NAME and PRICE (32oz for 9.99)
      }
    } 
    dogFoodData += `</div>`;  //CLOSE DIV //////////////////////////
  } //End LOOPING///////////////////
  // console.log("dogFoodData", dogFoodData);
  dogFood.innerHTML = dogFoodData;  // add content to inner html
} //CLOSE INITIAL FUNCTION ///////////////////////////////
///////////////
//XHR request//
///////////////
var myRequestDog = new XMLHttpRequest();  
myRequestDog.addEventListener("load", executeThisCodeAfterFileIsLoadedDog); 
myRequestDog.open("GET", "food.JSON"); 
myRequestDog.send(); 
