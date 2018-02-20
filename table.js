var tableLength = jsonRepo.length;
var col = [];

 
for(i=0;i<tableLength;i++){
    for(key in jsonRepo[i]){
        if(col.indexOf(key)==-1){
            col.push(key);
        }
    }
}
 var tableVal= document.getElementById("table");
var table = "<tr>";
for(i in col){
    table += "<th>" + col[i] + "</th>";
}
table += "</tr>";
 
 for(i=0;i<tableLength;i++){
    table +="<tr>";
        for(j in col){
            table += "<td>" + jsonRepo[i][col[j]] + "</td>";
        }
    table +="</tr>"
 }

 tableVal.innerHTML = table;





