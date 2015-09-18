function WordCount(str) {
    var arr = str.split('');
  
	var words = str.split(" ").length;
  	// console.log('This string has ' + words + ' words.');

   	var characters = arr.length;
  	// console.log('This string has ' + characters + ' characters.');
 
  	var numSpaces = 0;
  	for(var i = 0; i < arr.length; ++i){
    	if(arr[i] == ' ')
        numSpaces++;
		}
    //console.log('This string has ' + numSpaces + ' spaces.');
  
    var avgLength = 0;
  	var avgArray = str.split(" ");
  	for (var i = 0; i < words; i++){
    avgLength += avgArray[i].length;
  }
    var avg = avgLength / words;

    //console.log('The words in this string have an average length of ' + avg + '.');
  	

  	console.log('Words: ' + words + ', Characters: ' + characters + ', Spaces: ' + numSpaces + ', Average Word Length: ' + avg);
}


console.log(WordCount("These files contain this"));

