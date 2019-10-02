// array of people
const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]

// constants to hold list of players, the blue team, and the red team.
const listOfPlayers = []
const blueTeam = []
const redTeam = []

// Define player class
class player {
  constructor(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
    this.canThrowBall = canThrowBall;
    this.canDodgeBall = canDodgeBall;
    this.hasPaid = hasPaid;
    this.isHealthy = isHealthy;
    this.yearsExperience = yearsExperience;
  }
  createPlayer(playerID){
    let playerIndex;
    arrOfPeople.map(person => {
      if (person.id === playerID){
        person.canThrowBall = this.canThrowBall;
        person.canDodgeBall = this.canDodgeBall;
        person.hasPaid = this.hasPaid;
        person.isHealthy = this.isHealthy;
        person.yearsExperience = this.yearsExperience;

        listOfPlayers.push(person);
        playerIndex = arrOfPeople.indexOf(person);
        console.log(listOfPlayers);
      }
    });

    arrOfPeople.splice(playerIndex, 1);
    console.log(arrOfPeople);
    $('.player').remove();
    listPeopleChoices();
    this.printPlayer();
  }

  printPlayer() {
    const listElement = document.getElementById('players');
    listOfPlayers.map(player => {
      const li = document.createElement("li");
      const buttonRed = document.createElement("button");
      buttonRed.className = "redBttn";
      buttonRed.innerHTML = '<i class="fa fa-plus" aria-hidden="true"></i>';
      buttonRed.addEventListener('click', function() {makeRed(player.id)} );
      
      const buttonBlue = document.createElement("button");
      buttonBlue.className = "blueBttn";
      buttonBlue.innerHTML = '<i class="fa fa-plus" aria-hidden="true"></i>';
      buttonBlue.addEventListener('click', function() {makeBlue(player.id)} );
      
      li.appendChild(buttonRed);
      li.appendChild(buttonBlue);
      li.appendChild(document.createTextNode(player.name + " - " + player.skillSet));
      listElement.append(li);
      buttonRed.parentElement.className = "player";
      buttonBlue.parentElement.className = "player";
    })
  }

}

// Define blue teammate class
class blueTeammate extends player {
  constructor(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
    super(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience);
    this.team = 'blue';
  }

  transBlue(playerID) {
    let playerIndex;
    listOfPlayers.map(person => {
      if (person.id === playerID){
        person.team = this.team;

        blueTeam.push(person);
        playerIndex = listOfPlayers.indexOf(person);
        console.log(blueTeam);
      }
    });
    listOfPlayers.splice(playerIndex, 1);
    listPeopleChoices();
    super.printPlayer();
    this.printTeam();
  }

  printTeam(){
    const listElement = document.getElementById('blue');
    blueTeam.map(player => {
      const li = document.createElement("li");
      li.className = "blue";
      li.appendChild(document.createTextNode(player.name + " - " + player.skillSet));
      listElement.append(li);
    })
  }
}

// Define red teammate class
class redTeammate extends player{
  constructor(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
    super(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience);
    this.team = 'red';
  }

  transRed(playerID) {
    let playerIndex;
    listOfPlayers.map(person => {
      if (person.id === playerID){
        person.team = this.team;

        redTeam.push(person);
        playerIndex = listOfPlayers.indexOf(person);
        console.log(redTeam);
      }
    });
    listOfPlayers.splice(playerIndex, 1);
    listPeopleChoices();
    super.printPlayer();
    this.printTeam();
  }

  printTeam(){
    const listElement = document.getElementById('red');
    redTeam.map(player => {
      const li = document.createElement("li");
      li.className = "red";
      li.appendChild(document.createTextNode(player.name + " - " + player.skillSet));
      listElement.append(li);
    })
  }
}

const listPeopleChoices = () => {
  const listElement = document.getElementById('people');
  arrOfPeople.map(person => {
    const li = document.createElement("li");
    li.className = "person";
    const button = document.createElement("button");
    button.innerHTML = '<i class="fa fa-plus" aria-hidden="true"></i>';
    button.addEventListener('click', function() {makePlayer(person.id)} );
    li.appendChild(button);
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet));
    listElement.append(li);
  })
}


const makePlayer = (id) => {
  $('.person').remove();
  let newPlayer = new player(true, true, false, true, 3);
  newPlayer.createPlayer(id);
  // listPeopleChoices();
}

const makeBlue = (id) => {
  $('.person').remove();
  $('.player').remove();
  $('.blue').remove();
  let newTeammate = new blueTeammate();
  newTeammate.transBlue(id);
}
const makeRed = (id) => {
  $('.person').remove();
  $('.player').remove();
  $('.red').remove();
  let newTeammate = new redTeammate();
  newTeammate.transRed(id);
}