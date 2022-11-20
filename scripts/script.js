$("#btn").on("click", () => {
  console.log("here");
  let selectedSize;
  console.log("val" + selectedSize);
  if ($("input:radio[name='size']").is(":checked")) {
    selectedSize = $("input[name='size']:checked").val();
    // show the output:
  }
  output.innerText = selectedSize
    ? `You selected ${selectedSize}`
    : `You haven't selected any size`;
});

function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

//submit
$("#sendName").click(function () {
  console.log($("#exampleInputEmail1").val());
  $("#greetingOutput").text("Hello " +$("##exampleInputEmail1").val());
})

//dependent data
var subjectObject = {
  "Dark": {
    "Greys": ["Black", "Dark Grey", "Stone"],
    "Reds": ["Maroon", "Dark Red", "Burgundy"],
    "Blues": ["Navy", "Turquoise", "Sapphire"]
  },
  "Light": {
    "Yellows": ["Beige", "Light Yellow", "Lemon"],
    "Blues": ["Baby Blue", "Teal", "Sky Blue"]
  }
}
window.onload = function() {
  var subjectSel = document.getElementById("subject");
  var topicSel = document.getElementById("topic");
  var chapterSel = document.getElementById("chapter");
  for (var x in subjectObject) {
    subjectSel.options[subjectSel.options.length] = new Option(x, x);
  }
  subjectSel.onchange = function() {
    //empty Chapters- and Topics- dropdowns
    chapterSel.length = 1;
    topicSel.length = 1;
    //display correct values
    for (var y in subjectObject[this.value]) {
      topicSel.options[topicSel.options.length] = new Option(y, y);
    }
  }
  topicSel.onchange = function() {
    //empty Chapters dropdown
    chapterSel.length = 1;
    //display correct values
    var z = subjectObject[subjectSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
    }
  }
}