
var timeout;

function myFunction() {

  timeout = setTimeout(showPage, 250);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
$(document).ready(function() {
    $('#myDiv').fadeIn(250);
    document.getElementById("myDiv").style.display = "block";

});
}
function toggle() {
  document.getElementById("myDiv").style.display = "block";

}
