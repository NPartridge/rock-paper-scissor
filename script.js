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


function playGame(){

	let humanScore = 0;
	let computerScore = 0;

	const resultContainer = document.querySelector('#resultContainer');

	const para = document.createElement('p');
	resultContainer.appendChild(para);

	const scoreText = document.createElement('p');
	resultContainer.appendChild(scoreText);

	function playRound(humanChoice, computerChoice)
	{
		if (
			humanChoice == 'rock' && computerChoice == 'paper' ||
			humanChoice == 'paper' && computerChoice == 'scissors' ||
			humanChoice == 'scissors' && computerChoice == 'rock'
			)
		{
			computerChoice = computerChoice.slice(0, 1).toUpperCase() + computerChoice.slice(1,);
			para.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
			computerScore++;
		}
		else if (
			humanChoice == 'rock' && computerChoice == 'scissors' ||
			humanChoice == 'paper' && computerChoice == 'rock' ||
			humanChoice == 'scissors' && computerChoice == 'paper'
			)
		{
			humanChoice = humanChoice.slice(0, 1).toUpperCase() + humanChoice.slice(1,);
			para.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
			humanScore++;
		}
		else
		{
			para.textContent = 'It\'s a draw!';
		}

		if (+humanScore == 5 || +computerScore == 5){
			const winner = +humanScore > +computerScore? 'player': 'computer';
			scoreText.textContent = `The winner is ${winner}!`;
		}
		else{
			scoreText.textContent = `Player Score: ${humanScore} | Computer Score: ${computerScore}`;
		}
	}

	const buttons = document.querySelectorAll("button");

	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			const humanSelection = button.textContent.toLowerCase();
			const computerSelection = getComputerChoice();
			playRound(humanSelection, computerSelection);
		})
	})

	
	
	
}

playGame();

