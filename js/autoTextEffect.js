const targetText = document.getElementById('text');
const targetSpeed = document.getElementById('speed');
let text = 'We Love Programming!';
let textArray = ['We love programming!', 'Shivali loves programming!','Akshay loves programming!'];
let index = 1;
let speed = 300 / targetSpeed.value;
textEffect(text);
function textEffect(text) {
    console.log("Inside text effect function");
    targetText.innerText = text.slice(0, index);
    index++;
    if(index > text.length) {
        index = 1;
    }
    setTimeout(textEffect(text), speed);
}
targetSpeed.addEventListener('input', (e) => speed = 300 / e.target.value);