let team1 = {
team: 'Brackets',
goals : [11,5,6,8],
goalsScored :['patrick','wilson','adam','messi'],
members:11
}

let team2 = {
team: 'Arch',
goals : [5,8,3,6],
goalsScored : ['thomson','john','rick','mark'],
members:11
}

let sumt1 = 0;
for(let i of team1.goals){
  sumt1 += i;
}
let team1Avg = sumt1/team1.goals.length;

let sumt2 = 0;
for(let i of team2.goals){
  sumt2 += i;
}
let team2Avg = sumt2/team2.goals.length;

let greatest = team1.goals[0];
let team1Index = 0;
for(let i=0;i<team1.goals.length;i++){
    if(greatest < team1.goals[i]){
        greatest = team1.goals[i];
        team1Index = i;
    }
}

let greatest2 = team2.goals[0];
let team2Index = 0;
for(let i=0;i<team2.goals.length;i++){
    if(greatest2 < team2.goals[i]){
        greatest2 = team2.goals[i];
        team2Index = i;
    }
}

(team1Avg > team2Avg) ? console.log(`Team1 Wins with ${greatest} highest goals scored in team1 by ${team1.goalsScored[team1Index]}`):
console.log(`Team2 Wins with ${greatest2} highest goals scored in team2 by ${team2.goalsScored[team2Index]}`)

