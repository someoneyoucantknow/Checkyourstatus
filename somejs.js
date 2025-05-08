let popup = document.getElementById("popup");
let popupText = document.getElementById("popupText");
let tryAgainBtn = document.getElementById("tryAgainBtn");
let size = 24;

function handleAnswer(answer) {
  popup.classList.remove("hidden");

  if (answer === "yes") {
    popupText.textContent = "Of course you are a gay.";
    tryAgainBtn.classList.add("hidden");
  } else {
    popupText.textContent = "Like you, your whole bloodline is gay. TRY AGAIN!";
    tryAgainBtn.classList.remove("hidden");
    size = 24;
    increaseTextSize();
  }
}

function increaseTextSize() {
  let interval = setInterval(() => {
    size += 2;
    popupText.style.fontSize = size + "px";
    if (size > 60) clearInterval(interval);
  }, 300);
}

function reset() {
  popup.classList.add("hidden");
  popupText.style.fontSize = "24px";
}
