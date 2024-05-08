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

console.log(getComputerChoice());

function getHumanChoice()
{
	const choice = prompt('Rock, Paper, or Scissors?')

	return choice.toLowerCase();
}

console.log(getHumanChoice());