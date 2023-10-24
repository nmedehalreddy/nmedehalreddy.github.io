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

  function alertPolygonName() {
    const thenumber = Number(document.getElementById("number").value);
    //Make sure thenumbver is absolute and save it in a new variable 
   var absolutenumber = Math.abs(thenumber);
    //make sure that the number is rounded ex 4.6 -> 5and save it in a new variable 
    var newnumber = Math.round(absolutenumber);

    switch (Number(newnumber)) {
      case 1:
        alert("henagon");
        break;
      case 2:
        alert("digon");
        break;
      case 3:
        alert("trigon");
        break;
      case 4:
        alert("tetragon");
        break;
      case 5:
        alert("pentagon");
        break;
      case 6:
        alert("hexagon");
        break;
      case 7:
        alert("heptagon");
        break;
      case 8:
        alert("octagon");
        break;
      case 9:
        alert("enneagon");
        break;
      case 10:
        alert("decagon");
        break;
        default: 
        alert("1 to 10") 
    // code block

    }
  }


 