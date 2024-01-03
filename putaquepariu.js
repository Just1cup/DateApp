let score = 0;
let isButtonMoving = false;

const scoreCount = () => {
    const changeScoreNumber = document.getElementById('score');
    score++;
    changeScoreNumber.textContent = score.toString();
    lose(); // Move the lose function call here to ensure proper order
};

const moveFunc = () => {
    if (!isButtonMoving) {
        isButtonMoving = true;
        const moveX = document.querySelector('.btn-2');
        const aleatorioTop = Math.random() * 300 - 50 || Math.random() * 300 - 200;
        const aleatorioRight = Math.random() * 300 - 50;
        moveX.style.position = 'relative';
        moveX.style.top = `${aleatorioTop}px`;
        moveX.style.right = `${aleatorioRight}px`;
        setTimeout(() => {
            isButtonMoving = false;
        }, 500);
        scoreCount();
    }
};

const lose = () => {
    if (score > 10) {
        localStorage.setItem('gameOver', 'true');
        location.reload(); // Reload the page immediately when gameOver condition is met
    }
};

const isWin = () => {
    const win = document.querySelector('.win');
        win.textContent = 'aceito'; 
        win.style.cursor = 'pointer'
        win.addEventListener('click', () => {
            window.alert('Parabéns! Agora sou todinho seu, [Nome da pessoa].');
           location.reload();
           
        });
    }

document.addEventListener('DOMContentLoaded', isWin);
document.querySelector('.btn-2').addEventListener('click', moveFunc);

// Check for the game over condition after the page reloads
if (localStorage.getItem('gameOver') === 'true') {
    localStorage.removeItem('gameOver');
    window.alert('Você falhou, tente novamente.');
}
