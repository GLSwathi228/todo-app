//////var emailValidate = function (){
////	
////	var email  = document.getElementById("Email").value;
////    var password = document.getElementById("PassWord").value;
////	console.log("value of email and password " +JSON.stringify( email) + " "+ password);
////    
////	
////	if(email == '' || password == "")
////		{
////		alert ("please enter all the details");
////		}else{
////	  var atpos  = email.indexOf("@");
////	  var dotpos = email.indexOf(".");
////	  if(atpos<1 || dotpos < 1){
////		  alert("please enter valid email address");
////     }
////		}
////  return false
////}
//// 
////
////
////
////
////function validate(){
////	if( document.myForm.firstname.value == "" )
////    {
////       alert( "Please provide your name!" );
////       document.myForm.firstname.focus() ;
////       return false;
////    }
////    
////}
////function emailValidate(){
//	alert("coming");
//var x=document.getElementById("email").value;
//alert(x);
//var n=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
//console.log("failed");
//if(!n.test(x))
//{
//
//	alert("mail is not valid. Please enter valid mail id");
//
//}
//}
//
function ValidateEmail(email)   
{  
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myform.email.value))  
  {  
    return (true)  
  }  
    alert("You have entered an invalid email address!");
    return (false)  
}  
function CheckPassword()
{
 // at least one number, one lowercase and one uppercase letter
  // at least six characters that are letters, numbers or the underscore
	var password = document.getElementById("PassWord").value;
	var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;  
	console.log(password);
	var test = passw.test(password);
	if( test == true)   
	{   
	alert('Correct...');  
	return true;  
	}  
	else  
	{   
	alert('Wrong...!');
	return false;  
	}  
}  
	
