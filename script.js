// fucntion for input validation
function checkForInputUnit() {
// initializing the variables
var kelvin1 = document.getElementById("Kelvin");
var celsius1 = document.getElementById("Celsius");
var fahrenheit1 = document.getElementById("Fahrenheit");
var kelvin2 = document.getElementById("Kelvin1");
var celsius2 = document.getElementById("Celsius1");
var fahrenheit2 = document.getElementById("Fahrenheit1");
var number=document.getElementById('input').value;
//checking if any of the radio buttons are left empty
    if((kelvin1.checked || celsius1.checked || fahrenheit1.checked) && (kelvin2.checked || celsius2.checked || fahrenheit2.checked)){
      //after validation done, then removing the read-only attribute from input[text] box
      document.getElementById("input").removeAttribute('readonly');
      // calling the conversion function to do the main calculations
      conversion(); 
    } 
    // this runs when any of the radio button is left empty
    else{
     console.log("PLease select both options");
    }
  };
  // function for all the unit conversions
  function conversion(){ 
    var kelvin1 = document.getElementById("Kelvin");
    var celsius1 = document.getElementById("Celsius");
    var fahrenheit1 = document.getElementById("Fahrenheit");
    var kelvin2 = document.getElementById("Kelvin1");
    var celsius2 = document.getElementById("Celsius1");
    var fahrenheit2 = document.getElementById("Fahrenheit1");
    var number=document.getElementById('input').value;
    if (kelvin1.checked && kelvin2.checked){
      document.getElementById('answer').innerText=`Ans is ${number}`;
     } 
     else if(kelvin1.checked && celsius2.checked) {
        result=number-273;
        document.getElementById('answer').innerText=`Ans is ${result} C`;
     } 
     else if(kelvin1.checked && fahrenheit2.checked) {
       var result=(((number-273.15)*(9/5))+32);
       result.toFixed(2);
       document.getElementById('answer').innerText=`Ans is ${result} C`;
     }
  }
  convertButton=document.getElementById('convert_button');
  
  convertButton.addEventListener('click', checkForInputUnit);