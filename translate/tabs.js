function selectlan() {
  var language = document.getElementById("userInput").value;
  if (language == "other")
    return (document.getElementById("customlanguage").style.display = "inline");
  if (language !== "other")
    return (document.getElementById("customlanguage").style.display = "none");
}

function clicker() {
  var language2 = document.getElementById("userInput").value;
  if (language2 == "other") {
    var text = document.getElementById("TextTranslate").value;
    var language = document.getElementById("customlanguage").value;
    if (!text) return;
    if (!language) return;
    fetch(
      `https://hunterapi.sytes.net/translate?language=${language}&text=${text}`
    )
      .then((res) => res.json())
      .then(async (json) => {
        if (!json.translation) {
          document.getElementById(
            "Textasd"
          ).textContent = `I can't translate that.`;
        } else {
          document.getElementById(
            "Textasd"
          ).textContent = `${json.translation}`;
        }
      })
      .catch(() => {
        console.log("Error");
      });
  } else {
    var text = document.getElementById("TextTranslate").value;
    var language = document.getElementById("userInput").value;
    if (!text) return;
    if (language == "nothing") return;
    fetch(
      `https://hunterapi.sytes.net/translate/${language}/${text}`
    )
      .then((res) => res.json())
      .then(async (json) => {
        document.getElementById("Textasd").textContent = `${json.translation}`;
      })
      .catch(() => {
        console.log("Error");
      });
  }
}

