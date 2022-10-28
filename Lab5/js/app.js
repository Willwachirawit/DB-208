let userScore = 0;
let compScore = 0;

const USERSCORE = document.querySelector('#user-score');
const COMPSCORE = document.querySelector('#comp-score');
const RESULT = document.querySelector('.result');
const USERCHOICE = document.querySelector('#user-choice');
const COMPCHOICE = document.querySelector('#comp-choice');
const CHOICE = document.querySelectorAll('.choice');
const MESSAGE = document.querySelector('#message');

function ready(){
    USERCHOICE.setAttribute('src', `image/rock.png`);
    COMPCHOICE.setAttribute('src', `image/rock.png`);

    USERCHOICE.classList.add('ready');
    COMPCHOICE.classList.add('ready');
}

for(let choice of CHOICE) {
    choice.addEventListener('click', function(){
        play(this.id);
    });
}
ready();

function computerSelect(){
    let choices = ['rock','paper','scissors'];
    let selectedIndex = Math.floor(Math.random()*3);
    return choices[selectedIndex];
}

function play(userChoice){
    USERCHOICE.classList.remove('ready');
    COMPCHOICE.classList.remove('ready');

    let compChoice = computerSelect();
    USERCHOICE.setAttribute('src', `image/${userChoice}.png`);
    COMPCHOICE.setAttribute('src', `image/${compChoice}.png`);

    //console.log('Comp: '+compChoice);
    //console.log('User: '+userChoice);
    // if(
    //     (userChoice == 'rock' && compChoice == 'scissors') || 
    //    (userChoice == 'paper' && compChoice == 'rock') || 
    //    (userChoice == 'scissors' && compChoice == 'paper')
    //    ){
    // win(userChoice, compChoice);
    // }
    // else if(
    //     (userChoice == 'rock' && compChoice == 'paper') || 
    //     (userChoice == 'paper' && compChoice == 'scissors') || 
    //     (userChoice == 'scissors' && compChoice == 'rock')
    // ){
    //     lose(userChoice, compChoice);
    // }
    // else{
    //     draw(userChoice);
    // }
    let battle = userChoice+compChoice;
    if(
        (battle == 'paperrock') || 
        (battle == 'rockscissors') || 
        (battle == 'scissorspaper')
       ){
    win(userChoice, compChoice);
    }
    else if(
        (battle == 'rockpaper') || 
        (battle == 'paperscissors') || 
        (battle == 'scissorsrock')
    ){
        lose(userChoice, compChoice);
    }
    else{
        draw(userChoice);
    }
    setTimeout(()=>{
        ready();
    },1000);
}

function win(user, comp){
    USERSCORE.innerHTML = ++userScore;
    RESULT.innerHTML = `${user.toUpperCase()} beats `; 
    RESULT.innerHTML += `${comp.toUpperCase()}. `;
    RESULT.innerHTML += `You <i>Win!<i/>`;
}

function lose(user, comp){
    COMPSCORE.innerHTML = ++compScore;
    RESULT.innerHTML = `${comp.toUpperCase()} beats `;
    RESULT.innerHTML += `${user.toUpperCase()}. `;
    RESULT.innerHTML += `You <i>Lose!<i/>`;
}

function draw(user, comp){
    RESULT.innerHTML = `It was draw! You bot chose`;
    RESULT.innerHTML += `${user.toUpperCase()}`;
}