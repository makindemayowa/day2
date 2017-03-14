module.exports = {
words :function(str){
  var dict = {};
  var arrOfWord = str.split(/\s+/g);
  for (i=0; i<= arrOfWord.length - 1; i++){
    if (dict[arrOfWord[i]] && !isNaN(dict[arrOfWord[i]])){
      dict[arrOfWord[i]]++
    }
    else{
      dict[arrOfWord[i]] = 1
    }
  }
  return dict
}
}