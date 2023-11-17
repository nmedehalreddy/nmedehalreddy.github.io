function validateForm() {
    var output;
    if ( document.forms["formByo"]["name"].value == "") {
        alert("Name must be filled out");
      return false;
    }
    if ( document.forms["formByo"]["mascot"].value == "") {
        alert("Mascot must be filled out");
      return false;
    }

    var selectedFile = document.getElementById('image').files[0];
    if(typeof selectedFile === 'undefined') {
      alert("Please select image file");
      return false;
    }
    var allowedTypes = ['image/jpeg', 'image/png'];

    if (!allowedTypes.includes(selectedFile.type)) {
       alert('Invalid file type. Please upload a JPEG, PNG file.');
       return false;
    } 

    if ( document.forms["formByo"]["imageCaption"].value == "") {
      alert("ImageCaption must be filled out");
    return false;
    }
  if ( document.forms["formByo"]["personalBackground"].value == "") {
      alert("Personal Background must be filled out");
    return false;
  }
  if ( document.forms["formByo"]["professionalBackground"].value == "") {
      alert("Professional Background must be filled out");
    return false;
  }
  if ( document.forms["formByo"]["academicBackground"].value == "") {
    alert("Academic  Background must be filled out");
    return false;
  }
  if ( document.forms["formByo"]["backgroundInWeb"].value == "") {
    alert("Background in Web Development must be filled out");
    return false;
  }
  if ( document.forms["formByo"]["primaryComputerPlatform"].value == "") {
    alert("Primary Computer Platform must be filled out");
    return false;
  }
  if ( document.forms["formByo"]["courseTaken"].value == "") {
    alert("Courses Taking must be filled out");
    return false;
  }
  var checkbox = document.getElementById("terms");
  if (checkbox.checked == false) {
    alert("Please chekck box to agree terms before submit.");
    return false;
  }

  }

  function addMore() {
    var pElement = document.createElement('p');
    var input = document.createElement("input");
    input.type = "text";
    var container = document.getElementById("container");
    var deleteLink = document.createElement('a');
    deleteLink.href = "#";
    deleteLink.appendChild(document.createTextNode('delete'));
    pElement.appendChild(input);
    pElement.appendChild(deleteLink)
    container.appendChild(pElement);
    


    //container.appendChild(input);
    deleteLink.onclick = function(){
      container.removeChild(pElement);

    }
  }

    //function name to load 
    function loadPage() {
      validateForm();
      var name = document.getElementById("name").value;
      var mascot = document.getElementById("mascot").value;
      var image = document.getElementById("image").files[0];
      var imageURL = URL.createObjectURL(image);
      /*
      
      */
      var imageCaption = document.getElementById("imageCaption").value;
      var personalBackground = document.getElementById("personalBackground").value;
      var professionalBackground = document.getElementById("professionalBackground").value;
      var academicBackground = document.getElementById("academicBackground").value;
      var backgroundInWeb = document.getElementById("backgroundInWeb").value;
      var primaryComputerPlatform = document.getElementById("primaryComputerPlatform").value;
      var courseTaken = document.getElementById("courseTaken").value;
      var funnyThing = document.getElementById("funnyThing").value;
      var anythingElse = document.getElementById("anythingElse").value;
      var terms = document.getElementById("terms").value;

      document.getElementById("formData").remove();

      document.getElementById("output").innerHTML = "<p> <h3>name:  " + name + "</h3></p>" +
                                                    "<p><h3> mascot:  " + mascot + "</h3></p>" +
                                                    "<img src=\"" + imageURL + "\" >" +
                                                    "<figcaption> Image Caption:  " + imageCaption + "</figcaption>" +
                                                    "<ul class='myUL'>" + "<li ><b> Personal Background - </b>" + personalBackground + "</li>" +
                                                     "<li> <b> Professional Background - </b>" + professionalBackground + "</li>" +
                                                     "<li> <b> Academic Background - </b>" + academicBackground + "</li>" +
                                                     "<li> <b> Background In Web Developemnt - </b>" + backgroundInWeb + "</li>" +
                                                     "<li> <b> Primary Computer Platform - </b>" + primaryComputerPlatform + "</li>" +
                                                     "<li> <b> Courses currently taking - </b>" + courseTaken + "</li>" +
                                                     "<li> <b> Funny Thing - </b>" + funnyThing + "</li>" +
                                                     "<li> <b> Anything Else - </b>" + anythingElse + "</li>" +
                                                     "<li> <b> Checkmark that you agree w/ text - </b>" + terms + "</li>" +
                                                     "</ul>" 







                                                    





    }
  

