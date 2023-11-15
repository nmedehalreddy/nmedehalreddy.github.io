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

    if ( document.forms["formByo"]["ImageCaption"].value == "") {
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

