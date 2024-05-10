function getComputerChoice()
{
	const randomNum = Math.floor(Math.random() * 3);
	let sign;
	
	switch(randomNum)
	{
		case 0:
			sign = "rock";
			break;
		case 1:
			sign = "paper";
			break;
		case 2:
			sign = "scissors";
			break;
	}
	return sign;
}


function getHumanChoice()
{
	const choice = prompt('Rock, Paper, or Scissors?')

	return choice.toLowerCase();
}


function playRound(humanChoice, computerChoice)
{
	if (
		humanChoice == 'rock' && computerChoice == 'paper' ||
		humanChoice == 'paper' && computerChoice == 'scissors' ||
		humanChoice == 'scissors' && computerChoice == 'rock'
		)
	{
		// capitalize computer choice
		computerChoice = computerChoice.slice(0, 1).toUpperCase() + computerChoice.slice(1,);
		console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
		computerScore++;
	}
	else if (
		humanChoice == 'rock' && computerChoice == 'scissors' ||
		humanChoice == 'paper' && computerChoice == 'rock' ||
		humanChoice == 'scissors' && computerChoice == 'paper'
		)
	{
		// capitalize human choice
		humanChoice = humanChoice.slice(0, 1).toUpperCase() + humanChoice.slice(1,);
		console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
		humanScore++;
	}
	else
	{
		console.log('It\'s a draw!');
	}
}

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);