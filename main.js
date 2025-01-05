let score = JSON.parse(localStorage.getItem('score')) ||
    {
        wins: 0,
        losses: 0,
        ties: 0,
    };

update()

console.log("Hello Fellow Monkey!");

function update(){
    document.querySelector('.ties-score').innerHTML = score.ties;
    document.querySelector('.wins-score').innerHTML = score.wins;
    document.querySelector('.losses-score').innerHTML = score.losses;
}

function computerMove(){
    let move = '';
    const num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) {
        move = 'rock';
    } else if (num === 2) {
        move = 'paper';
    }
    else if (num === 3) {
        move = 'scissors';
    }
    return move;
}

function play(item){
    const move = computerMove();
    let result = '';
    if (move === item) {
        result = 'Tie.';
    }
    else if (item === 'scissors') {
        if (move === 'rock') {
            result = 'You lose.';
        } else if (move === 'paper') {
            result = 'You win.';
        }
    }
    else if (item === 'paper') {
        if (move === 'rock') {
            result = 'You win.';
        } else if (move === 'scissors') {
            result = 'You lose.';
        }
    }

    else if (item === 'rock') {
        if (move === 'paper') {
            result = 'You lose.';
        } else if (move === 'scissors') {
            result = 'You win.';
        }
    }

    if (result === 'You win.') {
        score.wins++
    } else if (result === 'You lose.') {
        score.losses++
    } else {
        score.ties++
    }

    localStorage.setItem('score', JSON.stringify(score));
    update()
    document.querySelector(".result").innerHTML = result;
    document.querySelector(".moves").innerHTML = `
                <div class="flex">
                    <div class="move">
                        <img src="Assets/${item}.png" alt="${item}" class="move-icon">
                        <p>You</p>
                    </div>
                    <div class="move">
                        <img src="Assets/${move}.png" alt="${move}" class="move-icon">
                        <p>Computer</p>
                    </div>
                </div>`;

}