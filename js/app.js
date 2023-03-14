const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id !== 'clear' && item.id !== 'backspace' && item.id !== 'equal') {
      display.innerHTML += item.id;
    }

    if (item.id === 'clear') {
      display.innerHTML = '';
    }

    if (item.id === 'backspace') {
      let string = display.innerHTML.toString();
      display.innerHTML = string.slice(0, -1);
    }

    if (display.innerHTML != '' && item.id === 'equal') {
      display.innerHTML = eval(display.innerHTML);
    }
  };
});
