function appendToDisplay(value) {
  const display = document.getElementById('display');
  display.value += value;
}
function clearDisplay() {
  const display = document.getElementById('display');
  display.value = '';
}
function calculate() {
  const display = document.getElementById('display');
  if(display.value !== ''){
    display.value = eval(display.value);
  } else {
    display.value = 'Error';
  }
}
function remove(){
  const display =document.getElementById('display');
  display.value = display.value.slice(0, -1);
}
