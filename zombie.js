/*
 		Joshua Whitney  
 		VFW 1304 
		Assignement 2
 */

window.addEventListener("DOMContentLoaded", function(){

//GLOBAL VARIABLES
var fName 			= document.getElementById("fname");
var lName 			= document.getElementById("lname");
var eMail		    = document.getElementById("clientemail");
var tele 			= document.getElementById("clienttelephone");
var zName 			= document.getElementById("firstname");
var zlastName 		= document.getElementById("lastname");
var radio 			= document.getElementById("myform").sex;
var priorityValue   = document.getElementById("myform").priority;
var death 			= document.getElementById("myform").weapons;
var writing 		= document.getElementById("myform").text;
var rate 			= document.getElementById("stars");
var invisible 		= document.getElementById("customer");
var date			= document.getElementById("myform").dated;
var show			= document.createElement("ul");
var list			= document.createElement("li");
var divTag			= document.getElementById("container");
var nav				= document.getElementById("nav1");


//nav.appendChild(show);
//show.appendChild(list);

var showInfo = function(){
	for(i=0; i<6; i++){
		var showList = document.createElement("li");
		show.appendChild(showList);
	}
};
	
var keyInfo = function(){
	for(i=0, x=localStorage.length; i<x; i++){
		var storage = localStorage.key(i);
		var storageValue = localStorage.getItem(storage);
		return storage + storageValue;
	}
};
	
	
var storeData = function(){
	localStorage.setItem("User First Name", fName.value);
	localStorage.setItem("User Last Name", lName.value);
	localStorage.setItem("User Email", eMail.value);
	localStorage.setItem("User Telephone Number", tele.value);
	localStorage.setItem("Zombie's First Name", zName.value);
	localStorage.setItem("Zombie's Last Name", zlastName.value);
	localStorage.setItem("Zombie's Sex", checkSex());
	localStorage.setItem("Priority", checkValue());
	localStorage.setItem("Your Weapon of Choice", radioValue());
	localStorage.setItem("Users Reason", writing.value);
	localStorage.setItem("User's Rating", rate.value);
	localStorage.setItem("Invisible Info", invisible.value);
	localStorage.setItem("You Want Them Killed On", date.value);
	

};
var checkSex = function(){
	for(i=0, x=radio.length; i<x; i++){
		if(radio[i].checked){
			var newSex = radio[i].value;
			localStorage.setItem("Zombie's Sex", newSex)
			return newSex;
		}
	}
};
var checkValue = function(){
	for(i=0, x=priorityValue.length; i<x; i++){
		if(priorityValue[i].checked){
			var newCheck = priorityValue[i].value;
			localStorage.setItem("Priority", newCheck)
			return newCheck;
		
		}
	}
};
var radioValue = function(){
	for(i=0, x=death.length; i<x; i++){
		if(death[i].checked){
			var newDeath = death[i].value;
			localStorage.setItem("Your Weapon of Choice", newDeath)
			return newDeath;
		}
	}
};
var clearData = function(){
	localStorage.clear();
};
var popUp = function(){
	alert("New Zombie Added!");
};
button.addEventListener("click", keyInfo)
button.addEventListener("click", showInfo);
button.addEventListener("click", storeData);
button.addEventListener("click", popUp);
clearzombie.addEventListener("click", clearData);

/*var showZombie = $('showzombie');
showZombie.addEventListener("click", showInfo);
var clearZombie = $('clearzombie');
*/

















});