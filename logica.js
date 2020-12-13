var C = 0;
var K = 0;
var F = 0;

    //Fahrenheit a Celsius   C =(F-32)*5/9
    function Fahrenheit_Celsius() {
      
      F = document.getElementById("cantidad").value

      C =(F-32)*5/9;
     
      document.write("Celsius: " + C);
      
    }
     
   //Fahrenheit a Kelvin K = (F-32)*5/9 +273
    function Fahrenheit_Kelvin() {

      F = document.getElementById("cantidad").value

      K = (F-32)*5/9 +273;

      document.write("Kelvin: " + K);
      
    }
    
    //Celsius a Fahrenheit  F = C*9/5+32
    function Celsius_Fahrenheit() {

      C = document.getElementById("cantidad").value

      F =C*9/5+32;

      document.write("Fahrenheit " + F);
      
    }
   
   //Celsius a Kelvin K=C+273
   function Celsius_Kelvin() {

     C = document.getElementById("cantidad").value;

     K=C+273;

     document.write("Celsius: " + K);

    }
    
                 
    //Kelvin a Fahrenheit   F= (k-273)9/5+32
    function Kelvin_Fahrenheit() {

       K = document.getElementById("cantidad").value;

       F= (K-273)*9/5+32;

      document.write("Fahrenheit: " + F );
      
    }

     //Kelvin a Celsius C=K-273
    function Kelvin_Celsius() {

    K = document.getElementById("cantidad").value;

    C=K-273;

    document.write("Celsius: " + C );
      
    }
     
     



