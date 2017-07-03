var result = 0;

for (var number = 0; number < 1000; number += 1) {
  // we use "||" instead of multiple "if" statements because
  // they will add numbers that are multiples of both 3 and 5 twice
  // you could use "if... else if" statements
  if (number % 3 == 0 || number % 5 == 0) {
    result += number;
  }
}

console.log(result);

