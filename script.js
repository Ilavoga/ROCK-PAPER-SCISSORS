//random choice for the computer
function getRandomComputerResult(){
    const options = ["Rock", "Paper", "Scissors"];
    const randomindex = Math.floor(Math.random()* options.length);
    return options[randomIndex];
}