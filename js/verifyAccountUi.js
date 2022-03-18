window.addEventListener("load", function () {
console.log("I am inside js file")
const inputs = document.querySelectorAll("input");
inputs[0].focus();
inputs.forEach((input, index) => {
  input.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      inputs[index].value = "";
      if (inputs[index + 1]) {
        setTimeout(() => inputs[index + 1].focus(), 10);
      }
    } 
    else if (e.key === "Backspace") {
      if (inputs[index - 1]) {
        setTimeout(() => inputs[index - 1].focus(), 10);
      }
    }
    else if(e.key === '+' || e.key === '-' || e.key === 'E'||e.key === 'e' ||e.key == '.' ){
      e.preventDefault();
    }
  });
  input.addEventListener('input',()=>{
    console.log(input.style.color)
    input.style.color ="black";
    input.style.borderColor = "#2596be";
  })
});
});
