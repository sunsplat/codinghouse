function swapCase(str) {
    // var strArray = str.split('');
    var newArray = '';
   // for (var i = 0; i < strArray.length; i++) {
    for (var i = 0; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase()) {
          newArray += str[i].toLowerCase();
          } else {
          newArray += str[i].toUpperCase();
          }
    }
  console.log(newArray);
  //return newArray;
}

swapCase("hEllO wOrld");