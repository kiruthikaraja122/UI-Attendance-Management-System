
var selectRow = null;
function onformSubmit(e){
  event.praseventDefault();
  var formData = readFormData();
  if(selectedRow===null){
    insertNewRecord(formData);
  }
  else{
    updateRecord(formData);
  }
  resetform();

}

function  readFormData(){
  var formData ={};
  formDate["EmployeeId"]=document.getElementById("EmployeeId").Value;
  formDate["Name"]=document.getElementBYID("name").Value;
  formDate["date"]=document.getElementById("date").Value;
return formData;
}

//insert data 
function insertNewRecord(data){
  var table =document.getElementById("storeList").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  var cell1 = newRow.insertCell(0);
  cell1.innerHTML=data.EmployeeId;
  var newRow= table.insertcell(1);
  cell2.innerHTML=data.Name;
  var cell3= newRow.insertcell(2);
  cell3.innerHTML= data.date;
}
function resetform(){
  document.getElementById('EmployeeId').value = '';
  document.getElementById('Name').value = '';
  document.getElementById('Date').value = '';
}
