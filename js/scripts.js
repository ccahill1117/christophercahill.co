// colorChanger//////////////////////////////////////////////////////////////
$(document).ready(function() {

  $("form#colorForm").submit(function() {
      var bgColor = $("#color").val();
      $("body").css("background-color", bgColor);
      event.preventDefault();
    });

    $("form#colorFontForm").submit(function() {
      var fontColor = $("#fontColor").val();
      $("body").css("color", fontColor);
      event.preventDefault();
    });

});

//textReplacer///////////////////////////////////////////////////////////////
function splitString(stringToSplit, separator) {
    return (stringToSplit.split(separator));
}

function letterDelete(inputArray, deleteArrayFunc) {
  var returnArray = [];
  for (var i = 0; i <= (inputArray.length)-1; i++) {
    if (deleteArrayFunc.includes(inputArray[i])) {
    returnArray.push("-")
    }
    else {returnArray.push(inputArray[i])
    }
  }
  return returnArray;
}

function letterOppositeDelete(inputArray, deleteArrayFunc) {
  var returnArray = [];
  for (var i = 0; i <= (inputArray.length)-1; i++) {
    if (deleteArrayFunc.includes(inputArray[i])) {
    returnArray.push(inputArray[i])
    }
    else {returnArray.push("-")
    }
  }
  return returnArray;
}

$(document).ready(function() {
  $("form#formSubmit").submit(function(event) {
    event.preventDefault();
    $("#inputStringHere").empty();
    $("#removeLetters").empty();
    $("#deletedStringHere").empty();
    $("oppDeletedStringHere").empty();
    var inputString = $("#stringInput").val();
    var deleteString = $("#letterInput").val();
    var stringArray = splitString(inputString, "");
    var deleteArray = splitString(deleteString, "")
    var deletedLetters = letterDelete(stringArray, deleteArray);
    var oppositeDeletedLetters = letterOppositeDelete(stringArray, deleteArray);
    $("#inputStringHere").append(stringArray);
    $("#removeLetters").append(deleteArray);
    $("#deletedStringHere").append(deletedLetters);
    $("#oppDeletedStringHere").append(oppositeDeletedLetters);
    console.log(stringArray);
    console.log(deleteArray);
    console.log(deletedLetters);
    console.log(oppositeDeletedLetters);
  });
});

//pigLatin///////////////////////////////////////////////////////////////////
function makeInputArray(inputString, separator) {
  return (inputString.split(separator));
}

// function spaceFinder(inputArray) {
//   debugger
//   var spaceIndex = [];
//   var element = " ";
//   var idx = inputArray.indexOf(element);
//   while (idx != -1) {
//     spaceIndex.push(idx);
//     idx=inputArray.indexOf(element, idx+1);
//   }
//   return spaceIndex;
// }

function sentenceCutter (inputString, split) {
  var newArray =
}
return newArray

function pigLatinTranslator(inputArray, vowels) {
  if (yArray.includes(inputArray[2])) {
    var yBeginning = inputArray.slice(0,2);
    var yEnd = inputArray.slice(2);
    return (yEnd.concat(yBeginning)).concat(["a","y"]);
  }
  else if (yArray.includes(inputArray[0])) {
    var yCon = inputArray.shift();
    return (inputArray.concat(yCon)).concat(["a","y"]);
  }
  else if (vowels.includes(inputArray[0])) {
    return inputArray.concat(["w","a","y"])
    debugger
  }
  else if (consonantArray.includes(inputArray[0]) &&
          consonantArray.includes(inputArray[1]) &&
          consonantArray.includes(inputArray[2])) {
          var threeCons = inputArray.slice(0,3);
          var endOfThreeCons = inputArray.slice(3);
          return (endOfThreeCons.concat(threeCons)).concat(["a","y"]);
  }
  else if (consonantArray.includes(inputArray[0]) &&
          consonantArray.includes(inputArray[1])) {
          var twoCons = inputArray.slice(0, 2);
          var endOfTwoCons = inputArray.slice(2);
          return (endOfTwoCons.concat(twoCons)).concat(["a", "y"]);
  }
  else if (consonantArray.includes(inputArray[0])) {
          var oneCon = inputArray.shift();
          return (inputArray.concat(oneCon)).concat(["a","y"]);
  }
}

function cutArray () {

}

var vowelArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
var consonantArray = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "x", "z", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "V", "W", "X", "Z"];
var yArray = ["y", "Y"];
var qArray = ["q", "Q"];

$(document).ready(function(){
  $("#inputFormPigLatin").submit(function(event){
    event.preventDefault();

  var userString = $("#inputText").val();
  var userArray = makeInputArray(userString, "");
  var result = pigLatinTranslator(userArray, vowelArray);
  var spaceIndices = spaceFinder(userArray);

  $(".resultDiv").empty();
  $(".resultDiv").append(result);

  $(".resultDiv2").empty();
  $(".resultDiv2").text(result.join(''));

  console.log(result);
  console.log(spaceIndices);


  });
});
