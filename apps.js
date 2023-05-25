var studentData = {sname:"Jamal Talukder" , sroll:"one" , sclass:"NINE" , fathername:"MD Faruk Matabbar" , mothername:"Halima Begum" , dateofbirth:"02-18-2005" , sgender:"Male"};
document.getElementById('print').innerHTML = studentData.sname+"<br>"+studentData.sroll+"<br>"+studentData.sclass+"<br>"+studentData.fathername+"<br>"+studentData.mothername+"<br>"+studentData.dateofbirth+"<br>"+studentData.sgender+"<br>";
document.getElementById('print').style.color = "green";
document.getElementById('print').style.backgroundColor = "powderblue";




var sarray = ["jamal","kamal","ratul","roni"];
document.write(sarray[02]);

sarray.push("Rakib");

sarray.pop('roni');

document.write(sarray);





function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }


  let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("demo 1").innerHTML = text.length;