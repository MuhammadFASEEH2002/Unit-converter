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
    var num=document.getElementById('input').value;
    var number=parseInt(num);
    if (kelvin1.checked && kelvin2.checked){  //converting Kelvin into Kelvin
      document.getElementById('answer').innerText=`${number} K`;
     } 
     else if(kelvin1.checked && celsius2.checked) {    //converting Kelvin into Celsius
        result=(number - 273.15);
        document.getElementById('answer').innerText=`${result} C`;
     } 
     else if(kelvin1.checked && fahrenheit2.checked) {      //converting Kelvin into Fahrenheit
       result=(((number-273.15)*(9/5))+32);
       document.getElementById('answer').innerText=`${result} F`;
     }
     else if(celsius1.checked && kelvin2.checked){   //converting Celsius into Kelvin
      var kelvin_unit=273.15;
      result= number + kelvin_unit;
      document.getElementById('answer').innerText=`${result} K`;
     }
     else if(celsius1.checked && celsius2.checked) {     //converting Celsius into Celsius
      document.getElementById('answer').innerText=`${number} C`;
     } 
     else if(celsius1.checked && fahrenheit2.checked) {   //converting Celsius into Fahrenheit
       result=((number*(9/5))+32);
      document.getElementById('answer').innerText=`${result} F`;
    }
     else if(fahrenheit1.checked && kelvin2.checked){   //converting Fahrneheit into Kelvin
      result=(((number - 32) *(5/9)) + 273.15);
      document.getElementById('answer').innerText=`${result} K`;
     }
     else if(fahrenheit1.checked && celsius2.checked) {    //converting Fahrneheit into Celsius
      result=((number - 32) * (5/9));
      document.getElementById('answer').innerText=`${result} C`;
     } 
     else if(fahrenheit1.checked && fahrenheit2.checked) {   //converting Fahrneheit into Fahrenheit
      document.getElementById('answer').innerText=`${number} F`;
   }
  }
  //calling the function on button click
  convertButton=document.getElementById('convert_button');
  convertButton.addEventListener('click', checkForInputUnit);