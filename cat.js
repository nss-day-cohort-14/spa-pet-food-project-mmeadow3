function executeThisCodeAfterFileIsLoadedCat () { //cat function

  //console.log("this.responseText", this.responseText);
  var data = JSON.parse(this.responseText); // parse the json data to readable javascript
  // console.log("data", data);
  var catFood = document.getElementById("catFood");  // find div with correct id
  var catFoodData = "";  

  // console.log("data.cat_brands", data.cat_brands);
  for (var i = 0; i < data.cat_brands.length; i++) {  // loop thru cat_brands array
    // console.log("data.cat_brands[i]", data.cat_brands[i]);
    currentFood = data.cat_brands[i];  
    catFoodData += `<div class='cat_brand'>`;  //start DIV ///////////////////////
    catFoodData += `<h2>${currentFood.name}</h2>`;  
    catFoodData += `<p> ${currentFood.breeds} </p>`;  //ADD BREEDS BC THEY ARE THE SAME NODE AS BRANDS////////////////////////////

    for (var j = 0; j < currentFood.types.length; j++){  // loop thru TYPES array
      // console.log("currentFood.types[j]", currentFood.types[j]);
      currentType = currentFood.types[j]; 
      catFoodData += "<div class='type'> Type: " + currentType.type + "</div>"; //add food TYPE 

      for (var k = 0; k < currentType.volumes.length; k++){  // loop thru VOLUMES array (name, price)
        // console.log("currentType.volumes[k]", currentType.volumes[k]);
        currentVolume = currentType.volumes[k]; 
        catFoodData += "<div class='price'>Price: " + currentVolume.name + " for " + currentVolume.price + "</div>"; // add NAME and PRICE (32oz for 9.99)
      }
    } 
    catFoodData += `</div>`;  //CLOSE DIV /////////////////////////////

  };

  catFood.innerHTML = catFoodData;  

}


var catRequest = new XMLHttpRequest(); 
catRequest.addEventListener("load", executeThisCodeAfterFileIsLoadedCat); 
catRequest.open("GET", "catfood.JSON"); 
catRequest.send(); 
