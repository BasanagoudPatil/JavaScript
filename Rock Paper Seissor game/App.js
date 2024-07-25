let userscore = 0;
let robotscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uscore = document.querySelector("#user-score");
const rscore = document.querySelector("#robot-score");

const GameDraw = () => {
    console.log("Game was draw");
    msg.innerText = "Game Draw, try again.";
    msg.style.backgroundColor = "#081b31";
}



const showWinner = (userwin, userchoice, robotchoice) => {
    if(userwin){
        console.log("You win");
        msg.innerText = `you win! ${userchoice} beats ${robotchoice}`;
        msg.style.backgroundColor = "green";
        userscore++;
        uscore.innerText = userscore;
    }else{
        console.log("You lost");
        msg.innerText = `You lost ${robotchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
        robotscore++;
        rscore.innerText = robotscore;
    }
    
}

const playgame = (userchoice) => {
    console.log("User choice =", userchoice);
    const robotchoice = genrobotchoice();
    console.log("Robot choice =", robotchoice);

    if(userchoice === robotchoice){
        GameDraw();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
           userwin = robotchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            userwin = robotchoice === "scissor" ? false : true;
        }
        else{
            userwin = robotchoice === "rock" ? false : true;
        }
        showWinner(userwin, userchoice, robotchoice);
    }

}

const genrobotchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIDX = Math.floor(Math.random() * 3);
    return options[randomIDX];
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        //console.log("choice was selected", userchoice);
        playgame(userchoice);
    })
})
//gfhghghjghjg
