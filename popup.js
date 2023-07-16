document.addEventListener("DOMContentLoaded", function () {
  var textArea = document.getElementById("textArea");
  var correctButton = document.getElementById("correctButton");

  correctButton.addEventListener("click", function () {
    var text = textArea.value;

    // Call your grammar correction function here
    var correctedText = correctGrammar(text);

    // Display the corrected text
    textArea.value = correctedText;
  });

  // Grammar correction logic
  function correctGrammar(text) {
    // Correct the first letter of each sentence
    var correctedText = text.replace(/(^\w|\.\s+\w)/gm, function(match) {
      return match.toUpperCase();
    });

    return correctedText;
  }
});