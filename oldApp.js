console.log("1");

var people = [];
var attackBonus;
var i;

document.getElementById('submitMonster').addEventListener('click', makeCreature );
document.getElementById('attack').addEventListener('click', creatureAttack );




function makeCreature() {
	people.push( new Monster("Monster") );
	people.push( new Monster("Player") );

	for (i = 0; i < people.length; i++) {
		console.log( people[i] );
			document.getElementById('strength').reset();
			document.getElementById('strStat').innerHTML = people[i].str;

			document.getElementById('dexterity').reset();
			document.getElementById('dexStat').innerHTML = people[i].dex;

			document.getElementById('constitution').reset();
			document.getElementById('conStat').innerHTML = people[i].con;

			document.getElementById('wisdom').reset();
			document.getElementById('wisStat').innerHTML = people[i].wis;

			document.getElementById('intelligence').reset();
			document.getElementById('intStat').innerHTML = people[i].int;

			document.getElementById('charisma').reset();
			document.getElementById('chaStat').innerHTML = people[i].cha;
	}
	document.getElementById('statResults').innerHTML = "Stats Saved!";
}

function Monster(name) {
	this.name = name;
	this.str = parseInt( document.getElementById('strength').elements[0].value );
	this.dex = parseInt( document.getElementById('dexterity').elements[0].value );
	this.con = parseInt( document.getElementById('constitution').elements[0].value );
	this.wis = parseInt( document.getElementById('wisdom').elements[0].value );
	this.int = parseInt( document.getElementById('intelligence').elements[0].value );
	this.cha = parseInt( document.getElementById('charisma').elements[0].value );
	this.attack = function() {
		if (this.name == "Monster") { 
			attackBonus = randomNumber(1, 20);

			document.getElementById('strStat').innerHTML = this.str + "+" + attackBonus;
			
			this.attBonus = attackBonus;
			this.attackTotal = attackBonus + this.str;
			
			return attackBonus + this.str;
		} else if (this.name == "Player") { 
			
			attackBonus = randomNumber(1, 20);
			
			document.getElementById('dexStat').innerHTML = this.dex + "+" + attackBonus;
			
			this.attBonus = attackBonus;
			this.attackTotal = attackBonus + this.dex;
			
			return attackBonus + this.dex;
		}
	}
	this.stuff = function() {
		var form = document.getElementById('classButton');
		var playerClass = "";
		var len = form.classType.length;

			if (form.classType[0].checked) {
				document.getElementById('classError').innerHTML = form.classType[0].value;
							playerClass = form.classType[0].value;
							return playerClass;
						} else if (form.classType[1].checked) {
							document.getElementById('classError').innerHTML = form.classType[1].value;
							playerClass = form.classType[1].value;
							return playerClass;
						} else if (form.classType[2].checked) {
							document.getElementById('classError').innerHTML = form.classType[2].value;
							playerClass = form.classType[2].value;
							return playerClass;
						} else if (form.classType[3].checked) {
							document.getElementById('classError').innerHTML = form.classType[3].value;
							playerClass = form.classType[3].value;
							return playerClass;
						} else if (form.classType[4].checked) {
							document.getElementById('classError').innerHTML = form.classType[4].value;
							playerClass = form.classType[4].value;
							return playerClass;
						} else {
							document.getElementById('classError').innerHTML = "Please select a Class";
							return "";
						}
	}	
}
function creatureAttack() {

	for (i = 0; i < people.length-1; i++) {
		var monsterAttack = people[i].attack();
		var playerAttack = people[i+1].attack();
		var playerClass = people[i+1].stuff();
		
		document.getElementById("monsterAttackResults").innerHTML = "<u>Monster</u><br>Base: +" + people[i].str + "<br>Bonus: +" + people[i].attBonus + "<br>Attack: " + monsterAttack;
		
		document.getElementById("playerAttackResults").innerHTML = "<u>Player</u><br>Base: +" + people[i+1].str + "<br>Bonus: +" + people[i+1].attBonus + "<br>Attack: " + playerAttack + "<br> Class: "+playerClass;

		if (people[i].attackTotal > people[i+1].attackTotal) {
			document.getElementById('whoWon').innerHTML = "Monster Wins!<br> Continue to Click Attack! to see more results!";
		} else if (people[i].attackTotal < people[i+1].attackTotal){
			document.getElementById('whoWon').innerHTML = "Player Wins!<br> Continue to Click Attack! to see more results!";
		} else if (people[i].attackTotal == people[i+1].attackTotal){
			document.getElementById('whoWon').innerHTML = "Tie!<br> Continue to Click Attack! to see more results!";
		}

	}	
}

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}








