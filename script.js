const body = document.querySelector('body');

function changeBackground(number) {
    if (number === '1') {
        body.classList.remove('background-2');
        body.classList.remove('background-3');
        body.classList.add('background-1');
    } else if (number === '2') {
        body.classList.remove('background-1');
        body.classList.remove('background-3');
        body.classList.add('background-2');
    } else {
        body.classList.remove('background-2');
        body.classList.remove('background-1');
        body.classList.add('background-3');
    }
}