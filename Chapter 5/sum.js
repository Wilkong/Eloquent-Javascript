
function range(first, last) {
  var res = [];
  var step = arguments[2];
  var temp;
  if (step === undefined) {
    step = 1;
  }

  if ((step < 0 && first < last) || (step > 0 && first > last)) {
    console.log('Параметры заданы не верно. Проверьте диапазон и шаг.');
  }

  for (var i = first;; i += step) {
    if ((i < last && step < 0) || (i > last && step > 0)) {
      break;
    }

    res.push(i);
  }

  return res;
}

function sum(input) {
  var res = 0;
  for (var el in input) {
    if (input.hasOwnProperty(el)) {
      res += input[el];
    }
  }

  return res;
}

console.log(sum(range(1, 10)));
