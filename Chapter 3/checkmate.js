var output = '';
var last = '#';
for (var i = 1; i <= 65; i++) {
  output += last;

  if (i % 8 === 0 && i !== 0) {
    console.log(output);
    output = '';
    last = last === '#' ? ' ' : '#';
  };

  last = last === '#' ? ' ' : '#';
}
