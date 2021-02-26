const value = document.getElementById('value')
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');

let number = 0;

increase.addEventListener('click', () => {
    value.innerHTML = increaseNum();
})
decrease.addEventListener('click', () => {
    value.innerHTML = decreaseNum();
})
reset.addEventListener('click', () => {
    value.innerHTML = resetNum();
})

function increaseNum() {
    number++;
    return number;
}

function decreaseNum() {
    number--;
    return number;
}

function resetNum() {
    number = 0;
    return number;
}