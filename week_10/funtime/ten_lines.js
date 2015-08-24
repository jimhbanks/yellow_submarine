function wordToWookie(txt) {
    var wordToWookie = {
        How are you: "Wyaaaaaa. Ruh ruh",
        Goodbye: "Ruow"
    };
}
$("input").keyup(function() {
    $("div").html(wordToWookie(this.value));
});