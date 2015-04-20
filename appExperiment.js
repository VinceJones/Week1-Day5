var people = [];
var attackBonus;
var i;

document.getElementById('submitMonster').addEventListener('click', makeCreature );
document.getElementById('attack').addEventListener('click', displayAttack );




function makeCreature() {

	//-------Create Monster----------
	var Monster = {
		type: "Monster",
		name : document.getElementById('monsterName').elements[0].value,
		str : parseInt( document.getElementById('strength').elements[0].value ),
		dex : parseInt( document.getElementById('dexterity').elements[0].value ),
		con : parseInt( document.getElementById('constitution').elements[0].value ),
		wis : parseInt( document.getElementById('wisdom').elements[0].value ),
		inte : parseInt( document.getElementById('intelligence').elements[0].value ),
		cha : parseInt( document.getElementById('charisma').elements[0].value ),

		attack : function() {
			if (this.type == "Monster") { 
				attackBonus = randomNumber(1, 20);

				//document.getElementById('strStat').innerHTML = this.str + "+" + attackBonus;
			
				this.attBonus = attackBonus;
				this.attackTotal = attackBonus + this.str;
			
				return attackBonus + this.str;
			} else if (this.type == "Player") { 
			
				attackBonus = randomNumber(1, 20);
			
				//document.getElementById('dexStat').innerHTML = this.dex + "+" + attackBonus;
			
				this.attBonus = attackBonus;
				this.attackTotal = attackBonus + this.dex;
			
				return attackBonus + this.dex;
			}
		}	
	}

	//--------Create Player Prototype-------
	var Player = Object.create( Monster );
	Player.type = "Player";
	Player.name = document.getElementById('playerName').elements[0].value;

	Player.stuff = function() {
		var form = document.getElementById('classButton');
		var playerClass = "";
		var len = form.classType.length;

						if (form.classType[0].checked) {
							document.getElementById('classError').innerHTML = form.classType[0].value;
							playerClass = form.classType[0].value;
							this.armor = this.con + 10;
							this.health = this.con + 20;
							this.playerClass = playerClass;
							return playerClass;

						} else if (form.classType[1].checked) {
							document.getElementById('classError').innerHTML = form.classType[1].value;
							playerClass = form.classType[1].value;
							this.armor = this.con + 17;
							this.health = 20 + randomNumber(1, 20) + 7;
							this.playerClass = playerClass;
							return playerClass;

						} else if (form.classType[2].checked) {
							document.getElementById('classError').innerHTML = form.classType[2].value;
							playerClass = form.classType[2].value;
							this.armor = this.con + 20;
							this.health = 20 + randomNumber(1, 20) + 10;
							this.playerClass = playerClass;
							return playerClass;

						} else if (form.classType[3].checked) {
							document.getElementById('classError').innerHTML = form.classType[3].value;
							playerClass = form.classType[3].value;
							this.armor = this.con + 14;
							this.health = 20 + randomNumber(1, 20) + 6;
							this.playerClass = playerClass;
							return playerClass;

						} else if (form.classType[4].checked) {
							document.getElementById('classError').innerHTML = form.classType[4].value;
							playerClass = form.classType[4].value;
							this.armor = this.con + 12;
							this.health = 20 + randomNumber(1, 20) + 4;
							this.playerClass = playerClass;
							return playerClass;

						} else {
							document.getElementById('classError').innerHTML = "Please select a Class!";
							return "";
						}
	}

	Monster.stuff = function() {
		var form = document.getElementById('monsterButton');
		var monsterKind = "";
		var len = form.monsterType.length;

						if (form.monsterType[0].checked) {
							document.getElementById('monsterError').innerHTML = form.monsterType[0].value;
							monsterKind = form.monsterType[0].value;
							this.armor = this.con + 10;
							this.health = 20;
							this.monsterKind = monsterKind;
							return monsterKind;

						} else if (form.monsterType[1].checked) {
							document.getElementById('monsterError').innerHTML = form.monsterType[1].value;
							monsterKind = form.monsterType[1].value;
							this.armor = this.con + 17;
							this.health = 20 + randomNumber(1, 20) + 10;
							this.monsterKind = monsterKind;
							return monsterKind;

						} else if (form.monsterType[2].checked) {
							document.getElementById('monsterError').innerHTML = form.monsterType[2].value;
							monsterKind = form.monsterType[2].value;
							this.armor = this.con + 7;
							this.health = 20 + randomNumber(1, 20) + 6;
							this.monsterKind = monsterKind;
							return monsterKind;

						} else if (form.monsterType[3].checked) {
							document.getElementById('monsterError').innerHTML = form.monsterType[3].value;
							monsterKind = form.monsterType[3].value;
							this.armor = this.con + 12;
							this.health = 20 + randomNumber(1, 20) + 3;
							this.monsterKind = monsterKind;
							return monsterKind;

						} else if (form.monsterType[4].checked) {
							document.getElementById('monsterError').innerHTML = form.monsterType[4].value;
							monsterKind = form.monsterType[4].value;
							this.armor = this.con + 30;
							this.health = 20 + randomNumber(1, 20) + 17;
							this.monsterKind = monsterKind;
							return monsterKind;

						} else {
							document.getElementById('monsterError').innerHTML = "Please select a Monster Type!";
							return "";
						}
	}

	people.push( Monster );
	people.push( Player );



	for (i = 0; i < people.length; i++) {
		console.log( people[i] );
		/*
			document.getElementById('monsterName').reset();
			document.getElementById('monsterNameStat').innerHTML = people[i].name;

			document.getElementById('playerName').reset();
			document.getElementById('playerNameStat').innerHTML = people[i+1].name;
		*/

			document.getElementById('strength').reset();
			document.getElementById('strStat').innerHTML = people[i].str;

			document.getElementById('dexterity').reset();
			document.getElementById('dexStat').innerHTML = people[i].dex;

			document.getElementById('constitution').reset();
			document.getElementById('conStat').innerHTML = people[i].con;

			document.getElementById('wisdom').reset();
			document.getElementById('wisStat').innerHTML = people[i].wis;

			document.getElementById('intelligence').reset();
			document.getElementById('intStat').innerHTML = people[i].inte;

			document.getElementById('charisma').reset();
			document.getElementById('chaStat').innerHTML = people[i].cha;
	}
	document.getElementById('statResults').innerHTML = "Stats Saved!";
}

function displayAttack() {

	for (i = 0; i < people.length-1; i++) {
		var monsterAttack = people[i].attack();
		var monsterKind = people[i].stuff();
		
		var playerAttack = people[i+1].attack();
		var playerClass = people[i+1].stuff();
		
		document.getElementById("monsterAttackResults").innerHTML = "<u>Monster:</u> " + people[i].name + "<br> Kind: " + monsterKind + "<br>Constitution + Armor: " + people[i].armor + "<br>Health: " + people[i].health + "<br><br>Attack Base: +" + people[i].str + "<br>Attack Bonus: +" + people[i].attBonus + "<br>Attack: " + monsterAttack;
		
		document.getElementById("playerAttackResults").innerHTML = "<u>Player:</u> " + people[i+1].name + "<br> Class: "+playerClass + "<br>Constitution + Armor: " + people[i+1].armor + "<br>Health: " + people[i+1].health + "<br><br>Attack Base: +" + people[i+1].str + "<br>Attack Bonus: +" + people[i+1].attBonus + "<br>Attack: " + playerAttack;

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








