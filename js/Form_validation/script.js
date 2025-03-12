let name_tag = document.getElementById("name");
let Nerr = document.getElementById("nameerr");

function validate() {
  if (name_tag.value == "" || name_tag.value == null) {
    Nerr.innerHTML = "plzz fill the data";
    console.log(Nerr);
    Nerr.style.color = "red";
    return false;
  } else {
    Nerr.innerHTML = "";
  }
}
