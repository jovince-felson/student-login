function saveRecord(){
  const Name = document.getElementById("Nameb").value;

  const Age = document.getElementById("Ageb").value;

  const Gender = document.getElementById("gender").value;
  gendervalue = "";

  for (let i of Gender) {
    if (i.checked) {
      gendervalue = i.value;
    }
  }

  const language = document.getElementById("Language").value;

  var lanugeArray = [];

  for (let i of language) {
    if (i.checked) {
      lanugeArray.push(i.value);         
    }
  }

  const Email = document.getElementById('email').value

  
}