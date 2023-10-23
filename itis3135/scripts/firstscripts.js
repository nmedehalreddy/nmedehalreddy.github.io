alert ("its working");

var name = "bob";

var currentDate = new Date();

document.getElementById("NAMEGOESHERE").innerHTML = currentDate;

function myFunction() {
    // Get the value of the input field with id="numb"
    let theusername = document.getElementById("name").value;
    let theuserfeeling = document.getElementById("feeling").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    text= "ReddysDesignCorp welcomes you " + theusername + "! We are glad your doing" + theuserfeeling + "!" ;
   
//    The ("name of your company") welcomes you, ("user's name") !
//    We're glad you are doing ("how they're doing}!
    document.getElementById("demo").innerHTML = text;
  }


 