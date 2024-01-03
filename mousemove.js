let isSoundPlaying = false;

function playClickSound(volume, startOffset) {
    if (!isSoundPlaying) {
        // Set the flag to indicate that the sound is currently playing
        isSoundPlaying = true;

        // Create an Audio object and set the source of your sound file
        const audio = new Audio('./click.mp4');

        // Set the volume (0.0 to 1.0)
        audio.volume = 0.05;

        audio.currentTime = startOffset;
        // Play the audio
        audio.play();

        // Set a timeout to reset the flag after the cooldown period (500ms)
        setTimeout(() => {
            isSoundPlaying = false;
        }, 500);

        // Move the scoreValue declaration here
        const scoreElement = document.querySelector('.score');
        const scoreValue = parseInt(scoreElement.textContent);

        // Check the score condition after setting scoreValue

        if (scoreValue >= 3 && scoreValue <= 5) {
            document.body.style.background = 'linear-gradient(180deg, rgba(252,245,241,1) 0%, rgba(255,227,227,1) 50%, rgba(228,191,191,1) 90%)';
        } else if (scoreValue > 5 && scoreValue < 7) {
            document.body.style.background = 'linear-gradient(180deg, rgba(255,234,234,1) 0%, rgba(255,217,217,1) 50%, rgba(255,200,200,1) 90%)';
        } else if (scoreValue >= 9 && scoreValue < 10) {
            document.body.style.background = 'linear-gradient(180deg, rgba(255,218,218,1) 0%, rgba(255,200,200,1) 50%, rgba(255,154,154,1) 90%)';
        } else if (scoreValue === 10) {
            document.body.style.background = 'linear-gradient(180deg, rgba(255,197,197,1) 0%, rgba(255,176,176,1) 50%, rgba(228,110,110,1) 90%)';
        }
    }
}    


document.querySelector('.btn-2').addEventListener('click', () => playClickSound(0.05, 0));
scoreCount();
