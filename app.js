
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
		dex : document.getElementById('dexterity').elements[0].value,
		con : document.getElementById('constitution').elements[0].value,
		wis : document.getElementById('wisdom').elements[0].value,
		int : document.getElementById('intelligence').elements[0].value,
		cha : document.getElementById('charisma').elements[0].value
		}
	people.push( Person );

	//document.getElementById('none').addEventListener('checked') ? Person.class = "none": Person.class = "notNone"

	people.push( Person );
	for (i = 0; i < people.length; i++) {
		document.getElementById("displayCreature").innerHTML = "Strength: " + people[i].str + "<br>Dexterity: " + people[i].dex + "<br>Constitution: " + people[i].con + "<br>Class: " + people[i].class;
		console.log("Strength: " + people[i].str + ", Dexterity: " + people[i].dex + ", Constitution: " + people[i].con);
	}
}


document.getElementById('submitMonster').addEventListener('click', makeCreature );


