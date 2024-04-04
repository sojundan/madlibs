

function printMadLib() {
  var adjective1 = document.getElementById("adjective1").value;
  var adjective2 = document.getElementById("adjective2").value;
  var plural_noun1 = document.getElementById("plural_noun1").value;
  var plural_noun2 = document.getElementById("plural_noun2").value;
  var noun1 = document.getElementById("noun1").value;
  var adjective3 = document.getElementById("adjective3").value;
  var adjective4 = document.getElemenById("adjective4").value;
  var noun2 = document.getElementById("noun2").value;
  var adjective5 = document.getElementById("adjective5").value;
  var place = document.getElementById("place").value;
  var adverb = document.getElementById("adverb").value;
  var occupation = document.getElementById("occupation").value;
  var plural_noun3 = document.getElementById("plural_noun3").value;

  document.getElementById("output").innerHTML = "There are a lot of " + adjective1 + " things about being a teacher. First of all, you get to teach " + adjective2 + " subjects like math, science, and " + plural_noun1 + " -- and who wouldn't want to talk about " + plural_noun1 + " all day?! Second, you have the same schedule as your " + plural_noun2 + " which means you get holidays like " + noun1 + " Day off from work.  And let's not forget about the entire " + adjective3 + " summer! Third, never underestimate how " + adjective4 + " it is to have the teacher's answer " + noun2 + ". That " + adjective5 + " book holds all the answer in (the) " + place + "! But the most " + adverb + " best thing about being a/ an " + occupation + " is the amazing students. Those " + plural_noun3 + " make it all worthwhile!";

}