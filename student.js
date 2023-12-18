function saveRecord() {
  var Name = document.getElementById("Nameb").value;
  var Age = document.getElementById("Ageb").value;
  var Email = document.getElementById("email").value;
  var Gender = document.getElementsByName("gender");
  var genderValue = "";

  for (let i of Gender) {
    if (i.checked) {
      genderValue = i.value;
    }
  }
  var Language = document.getElementsByName("language");

  var languageArray = [];

  for (let i of Language) {
    if (i.checked) {
      languageArray.push(i.value);
    }
  }

  // console.log(Name);
  // console.log(Age);
  // console.log(Email);
  // console.log(genderValue);
  // console.log(languageArray);

  var row = document.createElement("tr");

var Nametd = document.createElement("td");
Nametd.textContent = Name;

row.append(Nametd);

var Agetd = document.createElement('td')
Agetd.textContent=Age

row.append(Agetd)

var gendertd = document.createElement('td')
gendertd.textContent=Gender

row.append(gendertd)

var languagetd = document.createElement('td')
languagetd.textContent = Language
row.append(languagetd)

var emailtd = document.createElement('td')
emailtd.textContent = Email
row.append(emailtd)

var deletebtn = document.createElement('td')
deletebtn.textContent='Delete'

deletebtn.setAttribute('onclick',"deleteRow()")
row.append(deletebtn)

// console.log(row)

var Table = document.querySelector('#recordTable')
Table.append(row)



}
function deleteRow(){
  console.log('delete');
}
