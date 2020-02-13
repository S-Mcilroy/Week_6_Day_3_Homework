const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
  string = this.phrase.toLowerCase().replace(/[^a-z]/g, '');
  unqiueString = String.prototype.concat(...new Set(string))

  if (unqiueString.length === this.alphabet.length){
    return true;
  } else {
    return false;
  }

}

module.exports = PangramFinder;
