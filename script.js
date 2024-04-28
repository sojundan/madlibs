const firebaseConfig = {
        apiKey: "AIzaSyCavEaXIot3N5bMRbnVmZ03iCJptStWzFQ",
        authDomain: "madlibs-bf9f6.firebaseapp.com",
        projectId: "madlibs-bf9f6",
        storageBucket: "madlibs-bf9f6.appspot.com",
        messagingSenderId: "968925184451",
        appId: "1:968925184451:web:12805ac6325a7dc4c8bd76",
      };
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
console.log("firebase setup complete!");

function createMadLib() {
  console.log("createMadLib() called");
  var adjective1 = document.getElementById("adjective1").value;
  var adjective2 = document.getElementById("adjective2").value;
  var plural_noun1 = document.getElementById("plural_noun1").value;
  var plural_noun2 = document.getElementById("plural_noun2").value;
  var noun1 = document.getElementById("noun1").value;
  var adjective3 = document.getElementById("adjective3").value;
  var adjective4 = document.getElementById("adjective4").value;
  var noun2 = document.getElementById("noun2").value;
  var adjective5 = document.getElementById("adjective5").value;
  var place = document.getElementById("place").value;
  var adverb = document.getElementById("adverb").value;
  var occupation = document.getElementById("occupation").value;
  var plural_noun3 = document.getElementById("plural_noun3").value;
  var author = document.getElementById("author").value;

  document.getElementById("story").innerHTML = 
    "There are a lot of " + adjective1 + " things about being a teacher. First of all, you get to teach " + adjective2 + " subjects like math, science, and " + plural_noun1 + " -- and who wouldn't want to talk about  " + plural_noun1 + " all day?! Second, you have the same schedule as your " + plural_noun2 + 
    " which means you get holidays like " + noun1 + 
    " Day off from work.  And let's not forget about the entire  " +
    adjective3 + "  summer! Third, never underestimate how " +
      adjective4 + " it is to have the teacher's answer " +
    noun2 + ". That " + adjective5 + " book holds all the answer in (the) " + place + "! But the most " + adverb + " best thing about being a/ an " + occupation + " is the amazing students. Those " + plural_noun3 + " make it all worthwhile!  Story by " + author;

  var story = document.getElementById("story").innerHTML;
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
    author: author
  };
 
  var storyJSON = JSON.stringify(storyData);
  console.log("storyJSON: " + storyJSON);
  return storyData;
}

function saveMadLib() {
  console.log("saveMadLib() called");
  var storyData = createMadLib();
  db.collection("madlibs").doc(storyData.author).set(storyData);
  alert(storyData.author + " saved to database!");
  }

function retrieveMadLib() {
  console.log("retrieveMadLib() called");
  var author = prompt("Enter the name of the story you want to look up:");
  db.collection("madlibs")
    .doc(author)
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        var storyData = doc.data();
        document.getElementById("story").innerHTML = storyData.story;
      } else {
        console.log("No such document!");
        document.getElementById("story").innerHTML = "Story not found!";
      }
    })
    .catch((error) => {
      console.log("Error retrieving document:", error);
      document.getElementById("story").innerHTML = "Story not found!";
    });
}

function editMadLib() {
  console.log("editMadLib() called");
  var author = prompt("Enter the name of the story you want to edit:");
  db.collection("madlibs")
    .doc(author)
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        var storyData = doc.data();

        document.getElementById(
          "adjective1").value = storyData.adjective1;
        document.getElementById("adjective2").value = storyData.adjective2;
        document.getElementById("plural_noun1").value = storyData.plural_noun1;
        document.getElementById("plural_noun2").value = storyData.plural_noun2;
        document.getElementById("noun1").value = storyData.noun1;
        document.getElementById("adjective3").value = storyData.adjective3;
        document.getElementById("adjective4").value = storyData.adjective4;
        document.getElementById("adjective5").value = storyData.adjective5;
        document.getElementById("place").value = storyData.place;
        document.getElementById("adverb").value = storyData.adverb;
        document.getElementById("occupation").value = storyData.occupation;
        document.getElementById("plural_noun3").value = storyData.plural_noun3;
        document.getElementById("author").value = storyData.author;
        document.getElementById("story").innerHTML = storyData.story;
    } else {

        console.log("No such document!");
        document.getElementById("story").innerHTML = "Story not found!";
    }
})
  .catch((error) => {
    console.log("Error getting document:", error);
    document.getElementById("story").innerHTML = "Story not found!";
  });
}

function deleteMadLib() {
  console.log("deleteMadLib() called");

  var author = prompt("Enter the name of the story you want to delete:");
  db.collection("madlibs")
    .doc(author)
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        var storyData = doc.data();
        document.getElementById("story").innerHTML = storyData.author + "successfully deleted!";
        db.collection("madlibs").doc(storyData.author).delete();
        alert(storyData.author + " deleted from database!");
      } else {
        console.log("No such document!");
        document.getElementById("story").innerHTML = "Story not found!";
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
      document.getElementById("story").innerHTML = "Story not found!";
    });
}