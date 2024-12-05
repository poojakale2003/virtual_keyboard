const buttons = document.querySelectorAll('.btn')
const textarea = document.querySelector('textarea')

const delete_btn = document.querySelector('.delete')
const shift_btn = document.querySelector('.shift')
const space_btn = document.querySelector('.space')

let chars = [];
const clickSound = new Audio('single-key-type.wav');
const clickspaceSound = new Audio('spacebar-click-keyboard.mp3');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        textarea.value += btn.innerText
        chars = textarea.value.split('');
        clickSound.play();
    })
})

delete_btn.addEventListener('click', () => {
    chars.pop()
    textarea.value = chars.join('');
    clickSound.play();
})

space_btn.addEventListener('click', () => {
    chars.push(' ')
    textarea.value = chars.join('');
    clickspaceSound.play();
})

shift_btn.addEventListener('click', () => {
    buttons.forEach(btn => {
        btn.classList.toggle('upper');
        clickSound.play();
    })
})