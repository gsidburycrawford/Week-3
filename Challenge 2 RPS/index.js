let hands = ['rock', 'paper', 'scissors'];
function getComputerHand() {
    return hands[parseInt(Math.random()*10) % 3];
}

function compare(playerHand, computerHand) {
    
    console.log('Player hand is: ' + playerHand);
    console.log('Computer hand is: ' + computerHand);

    if (playerHand == computerHand) {
        return 'None';
    }
    else if (playerHand == hands[1] && computerHand == hands[3]) {
        return 'Player';
    } else if (playerHand == hands[1] && computerHand == hands[2]) {
        return 'Computer';

    } else if (playerHand == hands[2] && computerHand == hands[1]) {
        return 'Player';
    } else if (playerHand == hands[2] && computerHand == hands[3]) {
        return 'Computer';

    } else if (playerHand == hands[3] && computerHand == hands[2]) {
        return 'Player';
    } else if (playerHand == hands[3] && computerHand == hands[1]) {
        return 'Computer';
    }
}

console.log('Winner: ' + compare(hands[1], getComputerHand()));
