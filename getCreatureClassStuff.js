
//Code goes here

//Utility function
//A simple random number generator
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

var people = [];
var i;

function makeCreature() {
	var Person = {
		str : parseInt( document.getElementById('strength').elements[0].value ),
		dex : parseInt( document.getElementById('dexterity').elements[0].value ),
		con : parseInt( document.getElementById('constitution').elements[0].value ),
		wis : parseInt( document.getElementById('wisdom').elements[0].value ),
		int : parseInt( document.getElementById('intelligence').elements[0].value ),
		cha : parseInt( document.getElementById('charisma').elements[0].value ),

		creatureClass : getCreatureClass()
    	}

	people.push( Person );

	for (i = 0; i < people.length; i++) {
		document.getElementById("displayCreature").innerHTML = "Strength: " + people[i].str + "<br>Dexterity: " + people[i].dex + "<br>Constitution: " + people[i].con + "<br>Wisdom: " + people[i].wis + "<br>Intelligence: " + people[i].int + "<br>Charisma: " +people[i].cha + "<br>Class: " + people[i].creatureClass;
		console.log("Strength: " + people[i].str + ", Dexterity: " + people[i].dex + ", Constitution: " + people[i].con + ", Wisdom: " + people[i].wis + ", Intelligence: " + people[i].int + ", Charisma: " +people[i].cha + ", Class: " + people[i].creatureClass );
		}
	
}

function getCreatureClass() {
	var noneClass = document.getElementById('noneClass').checked;
	var txt = "";
	console.log("Inside getCreatureClass");
        if (noneClass = true) {
        	console.log("Inside noneClass check");
            txt = noneClass.forms[0].value;
            return txt;
        } else {
        	console.log("Inside else check");
        	txt = "Something else";
        	return txt;
        }
    }

/*
function getCreatureClass() {
	var creatureClass = document.getElementById('creatureClass').forms[0];
    var txt = "stuff";
    var i;
    for (i = 0; i < creatureClass.length; i++) {
        if (creatureClass[i].checked = true) {
            txt = creatureClass[i].value;
        }
    }
    return txt;
}
*/

document.getElementById('submitMonster').addEventListener('click', makeCreature );

		//creatureClass : document.getElementById('creatureClass').checked
		//creatureClass : document.getElementById('creatureClass').addEventListener('checked')

	//document.getElementById('none').addEventListener('checked') ? Person.class = "none": Person.class = "notNone"
