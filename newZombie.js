


window.addEventListener('DOMContentLoaded', function() {
	
	
	
	function $(x){
		var myElement = document.getElementById(x);
		return myElement;
	}
	
	
	function storeData(){
		var num = Math.floor(Math.random()*100001);
		radio();
		var data 			= {};
			data.fname 		= ["First Name: ", $('fname').value];
			data.lname 		= ["Last Name: ", $('lname').value];
			data.email 		= ["Email: ", $('clientemail').value];
			data.tel 		= ["Telephone Number: ", $('clienttelephone').value];
			data.zfname 	= ["Zombie's First Name: ", $('firstname').value];
			data.zlname 	= ["Zombie's Last Name: ", $('lastname').value];
			data.radio 		= ["Zombie's Sex is: ", radio()];
			data.prior 		= ["Priority is: ", document.getElementsByName('priority').value];
			data.weapon 	= ["Weapon of Choice: ", document.getElementsByName('weapons').value];
			data.text 		= ["They Should Die Because: ", $('writing').value];
			data.date 		= ["You want them killed on: ", $('deadLine').value];
			data.star 		= ["You rated us at a: ", $('stars'.value)];
			data.hide 		= ["Hidden data: ", $('customer').value];
			
			localStorage.setItem(num, JSON.stringify(data));
			alert("Zombie Saved!");
			location.reload();
	}
	function clear(){
		if(localStorage.length === 0){
			myDiv = document.createElement('div');
			myDiv.setAttribute("id", "newDiv");
			nav = $('nav1');
			nav.appendChild(myDiv);
			newText = document.createTextNode("THERE ARE NO ZOMBIES IN THE DATABASE!");
			myDiv.appendChild(newText);
		}else{
			localStorage.clear();
			newDiv = document.createElement('div');
			newDiv.setAttribute("id", "newDiv");
			nav = $('nav1');
			nav.appendChild(newDiv);
			text3 = document.createTextNode("ALL ZOMBIES HAVE BEEN KILLED!");
			newDiv.appendChild(text3); 
			location.reload();
		}
	}
	
	function radio(){
		var x = $('myform').sex;
		for(i=0; i<x.length; i++){
			if(x[i].checked){
				newSex = x[i].value;
				return newSex;
			}
		}
	}
	showzombie.onclick = function(){
		var newDiv = document.createElement('div');
		newDiv.setAttribute("id", "data");
		var newUl = document.createElement('ul');
		newDiv.appendChild(newUl);
		$('nav1').appendChild(newDiv);
		$('data');
		for(var i=0, x = localStorage.length; i<x; i++){
			var newLi = document.createElement('li');
			newUl.appendChild(newLi);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var json = JSON.parse(value);
			var newList = document.createElement('ul');
			newLi.appendChild(newList);
			for(var n in json){
				var newList = document.createElement('li');
				newList.setAttribute("class", "print");
				newLi.appendChild(newList);
				var optSubText = json[n][0]+" "+json[n][1];
				newList.innerHTML = optSubText;
			}
		}
				
	};

	
	function show(){
		for(i=0, x=localStorage.length; i<x; i++)
			var key = localStorage.key(0);
			var value = localStorage.getItem(key);
			var newInfo = (key+" : "+value);
			
	}
	
	button.onclick = function(){
		storeData();
		
	};
	
	var clearLink = $('clearzombie');
	clearLink.addEventListener("click", clear);

	
	
	
});
