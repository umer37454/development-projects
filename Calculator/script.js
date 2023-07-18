let result = document.getElementById('result');

let boxes = Array.from(document.getElementsByClassName('button'));

boxes.map((button) => {
  button.addEventListener('click', function (e) {
    doCalculate(e);
  })
})

// function will execute once button is clicked
function doCalculate(e) {

  //this will execute once button is clicked
  if (result.innerText === '0' || result.innerText === 'Error' || result.innerText === 'Infinity') {
    result.innerText = '';
  }

  //along with above if condition this will also execute once any button is clicked
  switch (e.target.innerText) {
    case 'AC':
      result.innerText = '0';
      break;

    case 'DEL':
      if (result.innerText) {
        result.innerText = result.innerText.slice(0, -1);
      }
      if (result.innerText === '') {
        result.innerText = '0';
      }
      break;

    case '=':
      try {
        result.innerText = eval(result.innerText);
      } catch {
        result.innerText = 'Error';
      }
      break;

    default:
      result.innerText += e.target.innerText;
      break;
  }
}