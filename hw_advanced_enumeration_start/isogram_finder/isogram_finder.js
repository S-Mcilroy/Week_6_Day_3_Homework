const IsogramFinder = function (word) {
  this.word = word
}

IsogramFinder.prototype.isIsogram = function () {
  unqiueString = String.prototype.concat(...new Set(this.word.toLowerCase()))
  if (unqiueString.length === this.word.length){
    return true
  } else {
    return false
  };
}

module.exports = IsogramFinder;
