let countdown = 60;
let yourScore = 0;
let opponentScore = 0;

// Update the countdown every second
setInterval(function() {
    countdown--;
    document.querySelector("#timer").textContent = `Time left: ${countdown} seconds`;
}, 1000);

document.querySelector("#submit").addEventListener("click", function () {
    let guess = document.querySelector("#input").value;
    socket.send(JSON.stringify({ type: "guess", guess: guess }));

    // Update the score based on whether the guess was correct or not
    // This is just a random example, you would need to replace this with your own game logic
    if (guess === 'correct') {
        yourScore++;
    } else {
        opponentScore++;
    }

    document.querySelector("#scores").textContent = `Your score: ${yourScore}, Opponent's score: ${opponentScore}`;
});
