$("#inputForm").submit(function(event) {
    event.preventDefault();
    var text = $("#user-text").val();
    $("dl").removeClass("hidden");
    var words = text.split(" ");
    numberOfWords(words);
    averageWordLength(words);
    uniqueWordCount(words);
  });

function numberOfWords(words) {
  $(".js-wordCount").text(words.length);
}

function uniqueWordCount(words) {
  var unique = new Set(words);m
  $(".js-unique").text(unique.size);
}

function averageWordLength(words) {
  var totalChar = 0;
  for (i = 0; i < words.length; i++) {
    totalChar += words[i].length;
  }
  var average = totalChar/words.length;
  $(".js-averageLength").text(average.toFixed(1));
}