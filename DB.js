debugger;
var db = openDatabase('Pharma', '1.0', 'tst', 2 * 1024 * 1024)
var msg;
let x=localStorage.id ++;
db.transaction(function (t) {
  t.executeSql('create table if not exists Users(id unique,name,User_name,Phone,email,Password,Address,role)')
  t.executeSql('create table if not exists Medicine(id unique,name,cat,quantity,sellingPrice,purchasingPrice,expirationDate,image)')
});



function addMed() {
    debugger;
    var id = x;
    var Medname = document.getElementById("name").value;
    var cat = document.getElementById("cat").value;
    var quantity = document.getElementById("qty").value;
    var sellingPrice = document.getElementById("sprice").value;
    var purcahsingPrice = document.getElementById("pprice").value;
    var exdate = document.getElementById("exdate").value;
    var img = image64;
    db.transaction(function (tx) {
        tx.executeSql('insert into Medicine (id,name,cat,quantity,sellingPrice,purchasingPrice,expirationDate,image) VALUES (?,?,?,?,?,?,?,?)', [id, Medname,cat,quantity, sellingPrice, purcahsingPrice, exdate,img ]);
    })
}


//Get All Medicine
 db.transaction(function (t) {
      t.executeSql('select * from Medicine', [], function (tx, res) {
        var inD 
      
        for (var i = 0; i < res.rows.length; i++) {
            var row=res.rows.item(i);
           
          inD += "<tr>"
            inD += "<td>" + row.name + "</td>"+"<td><img src='"+row.image+"' width='50px height='50px' '/></td>"
            +"<td>"+row.cat+"</td>"+"<td>"+row.sellingPrice+"</td>";
          inD += " <td>" +
          '<a id="Btn_edit" class="btn btn-primary"  href="#" role="button" aria-expanded="false" >'
          +
          '<i class="bi bi-pen-fill"></i>' +
          '</a>'
          +
          '<a role="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal" >' +
          '<i class="bi bi-trash-fill"></i>' +
          '</a>' +
          "</td>"
          inD += "</tr>"
        }
        document.getElementById("example").innerHTML = inD;
      }, null);
    });
    //Add User
    function addUser() {
      debugger;
      var id = x;
      var Uname = document.getElementById("name").value;
      var Uuser = document.getElementById("username").value;
      var UPhone = document.getElementById("phne").value;
      var uemail = document.getElementById("mail").value;
      var uPassword = document.getElementById("pass").value;
      var uAddress = document.getElementById("add").value;
      var  urole= document.getElementById("rol").value;
      db.transaction(function (tx) {
        tx.executeSql('insert into Users (id,name,User_name,Phone,email,Password,Address,role) VALUES (?,?,?,?,?,?,?,?)', [id, Uname,Uuser,UPhone,uemail,uPassword,uAddress,urole]);
        })
  }






  db.transaction(function (t) {
    t.executeSql('select * from Users', [], function (tx, res) {
      var inD ="<thead>"+
      '<tr>'+
        '<th scope="col">ID</th>'+
        '<th scope="col">Name</th>'+
        '<th scope="col">UserName</th>'+
        '<th scope="col">Phone</th>'+
        '<th scope="col">Email</th>'+
        '<th scope="col"> </th>'+
     ' </tr>'+
    "</thead>"
      
      for (var i = 0; i < res.rows.length; i++) {
          var row=res.rows.item(i);
        inD += "<tbody><tr>"
          inD += "<td>" + row.id + "</td>"+"<td>"+row.name+"</td>"
          +"<td>"+row.User_name+"</td>"+"<td>"+row.Phone+"</td>"+"<td>"+row.email+"</td>";
        inD += " <td>" +
        '<a id="Btn_edit" class="btn btn-primary"  href="#" role="button" aria-expanded="false" >'
        +
        '<i class="bi bi-pen-fill"></i>' +
        '</a>'
        +
        '<a role="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal" >' +
        '<i class="bi bi-trash-fill"></i>' +
        '</a>' +
        "</td>"
        inD += "</tr></tbody>"
      }
      document.getElementById("example1").innerHTML = inD;
    }, null);
  });
