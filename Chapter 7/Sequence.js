function Sequence() {
  //Is there a next element
  this.hasNextElement = false;
}

Sequence.prototype.hasNext = function() {
  return this.hasNextElement;
};

Sequence.prototype.next = function() {
};

function ArraySeq(inputArray) {
  this.index = 0;
  this.numbers = inputArray;
  if (inputArray.length > 0) {
    this.hasNextElement = true;
  };
}

ArraySeq.prototype = Object.create(Sequence.prototype);

ArraySeq.prototype.next = function() {
  var cur;
  if (this.numbers.hasOwnProperty(this.index)) {
    cur = this.numbers[this.index];
  }

  if (!this.numbers.hasOwnProperty([++this.index])) {
    this.hasNextElement = false;
  }

  return cur;
};

function RangeSeq(start, end) {
  this.cur = start;
  this.end = end;
  if (start <= end) {
    this.hasNextElement = true;
  }
}

RangeSeq.prototype = Object.create(Sequence.prototype);

RangeSeq.prototype.next = function() {
  if (this.cur + 1 > this.end) {
    this.hasNextElement = false;
  }

  return this.cur++;
};

function logFive(sequence) {
  var counter = 5;
  while (sequence.hasNext() && counter > 0) {
    console.log(sequence.next());
    counter--;
  }
}

logFive(new ArraySeq([1, 2]));

// → 1
// → 2
logFive(new RangeSeq(100, 110));

// → 100
// → 101
// → 102
// → 103
// → 104
