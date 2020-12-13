var kilometros = 0;
var Metros = 0;
var Centimetros = 0;

    //kilometros a metros k*1000
    function Kilometers_Meters() {
      
      Kilometros = document.getElementById("cantidad").value

      Metros =(Kilometros*1000);
     
      document.write("Metros: " + Metros);
      
    }
     
   //Fahrenheit a Kelvin K = (F-32)*5/9 +273
    function Meters_Kilometers() {

      Metros = document.getElementById("cantidad").value

      kilometros= (Metros/1000);

      document.write("Kilometros: " + kilometros);
      
    }
   
     



