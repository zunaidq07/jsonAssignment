var input = document.getElementById("url");
var submit = document.getElementById("submit");
var found = document.getElementById("found");
var dropbtn = document.getElementById("dropbtn");

// submit.onclick = function(){

// 	for(i=0;i<tableLength;i++){
// 		if(input.value == jsonRepo[i].url){
// 			found.innerHTML = "data found";
			dropbtn.onclick = function(){
				for(i=0;i<tableLength;i++){
				if(input.value == jsonRepo[i].url){
				found.innerHTML = "data found";

			document.write(input.value);
			document.write(dropbtn.value);
			}

		}
	}
// }

 function myFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("url");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

