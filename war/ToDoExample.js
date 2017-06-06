var arrayOfToDoList=[];
var tempArrayOfTodoList = [];
function todoDetails(id, notes, Checked, Deleted){
	this.id=id;
	this.notes=notes;
	this.Completed=Completed;
	this.Deleted=Deleted;
	
}
var arrayOfNotes=[];

function Add() {
	
	var task=document.getElementById("myinput").value;
	if(task == "")
		{
		alert("enter something!!");
		}
	else
		{

	var a = JSON.stringify(task);
	console.log(a);
	document.getElementById("myinput").value = "";
	var listelement=document.createElement("li");
	var textnode=document.createTextNode(task);
	listelement.appendChild(textnode);
	uid = "id" + Math.random().toString(16).slice(2);
	console.log(uid);
	arrayOfNotes.push(task);
	
	
	var ulelement=document.getElementById("listofitems");
	ulelement.appendChild(listelement);
	var checkbox=document.createElement("input");
	checkbox.setAttribute("type", "checkbox");
	
	listelement.appendChild(checkbox);
	var span=document.createElement("span");
	span.className="close";
	var textnode=document.createTextNode("\u00D7");
	span.appendChild(textnode);
	listelement.appendChild(span);
		}
}

function printAllEntries(){
	
	arrayOfTodoList = [];
	console.log("arrayOfTodoList" + arrayOfTodoList);
	
	CompletedItems();
	document.getElementById("display").innerHTML="";
	
	
	
	for(a=0;a<tempArrayOfTodoList.length;a++){
		
		arrayOfTodoList.push(JSON.stringify(tempArrayOfTodoList[a]));
		alert(arrayOfTodoList[a]);
	arrayOfTodoList.push(JSON.stringify(tempArrayOfTodoList[a]));
		
		

	}
	
	console.log("Array in JSON format" + arrayOfTodoList);
	
	document.getElementById("display").innerHTML = arrayOfTodoList;
	
}

var arrayOfCompletedListItems;

function CompletedItems(){
	
	arrayOfCompletedListItems = "";

	arrayOfListTags = document.getElementsByTagName("li");
	for(k=0;k<arrayOfListTags.length;k++){
		if(arrayOfListTags[k].classList.contains("linethrough")){
			
			tempArrayOfTodoList[k].isChecked = true;
			
			//console.log("tempArrayOfTodoList"+tempArrayOfTodoList[k].isChecked);
			arrayOfCompletedListItems += arrayOfNotes[k] + "<br>" ;
			
		}
	}
	
	//console.log(arrayOfCompletedListItems);
	//console.log("all entries: "+ tempArrayOfTodoList);
	//console.log("all JSON: "+ arrayOfTodoList);
}



function printCompletedItems(){
	
	CompletedItems();
	document.getElementById("display").innerHTML = "";
	
	document.getElementById("display").innerHTML = arrayOfCompletedListItems;
	
}




