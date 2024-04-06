

function createMadLib2() {
  console.log("createMadLib2() called");
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

  document.getElementById("story").innerHTML = 
    "There are a lot of <u>" +
    adjective1 + 
    "</u> things about being a teacher. First of all, you get to teach <u>" +
    adjective2 + 
    "</u> subjects like math, science, and <u>" +
    plural_noun1 +
    "</u> -- and who wouldn't want to talk about <u> " +
    plural_noun1 + 
    "</u> all day?! Second, you have the same schedule as your <u> " +
    plural_noun2 + 
    "</u> which means you get holidays like <u>" +
     noun1 + 
    "</u> Day off from work.  And let's not forget about the entire <u> " +
    adjective3 + 
    " </u> summer! Third, never underestimate how <u>" +
      adjective4 +
    " <u/>it is to have the teacher's answer <u>" +
    noun2 + 
    "</u>. That <u>" +
    adjective5 + 
    "</u> book holds all the answer in (the) <u>" +
    place + 
    "</u>! But the most <u>" +
    adverb + 
    "</u> best thing about being a/ an <u>" +
    occupation + 
    "</u> is the amazing students. Those <u>" +
    plural_noun3 + 
    "</u> make it all worthwhile!";

  var story = document.getElementById("story").inner HTML;
  console.log("story:" + story);

  var storyData = {
    timestamp: Date.now(),
    adjective1: adjective1,
    adjective2: adjective2,
    plural_noun1: plural_noun1,
    plural_noun2: plural_noun2,
    noun1: noun1,
    adjective3: adjective3,
    adjective4: adjective4,
    adjective5: adjective5,
    place: place,
    adverb: adverb,
    occupation: occupation,
    plural_noun3: plural_noun3,
};
console.log("storyData:" + storyData);

var storyJSON = JSON.stringify(storyData);
console.log("storyJSON:" + storyJSON);
return storyJSON;

}