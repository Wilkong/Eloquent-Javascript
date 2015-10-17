var box = {
  locked: true,
  unlock: function() {
    this.locked = false;
  },
  lock: function() {
    this.locked = true;
  },
  _content: [],
  get content() {
    if (this.locked) throw new Error('Заперто!');
    return this._content;
  }
};

function withBoxUnlocked(body) {
  var lock = box.locked;
  if (lock)
    box.unlock();
  try {
    body();
  } finally {
    if (lock)
      box.lock();
  }
}

withBoxUnlocked(function() {
  box.content.push('золотишко');
});

try {
  withBoxUnlocked(function() {
    throw new Error('Пираты на горизонте! Отмена!');
  });
} catch (e) {
  console.log('Произошла ошибка:', e);
}

console.log(box.locked);
