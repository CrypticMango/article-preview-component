const panel = document.getElementById("panel");
const shareButton = document.getElementById("share-button-main");
const shareButtonPanel = document.getElementById("share-button-panel");
const shareWord = document.getElementById("share-word");

shareButton.addEventListener("click", showPanel);
shareButtonPanel.addEventListener("click", showMichelle);
shareWord.addEventListener("click", hideShareClick);

function showPanel() {
    panel.style.display = "flex";
}

function showMichelle() {
    panel.style.display = "none";
}

function hideShareClick() {
    panel.style.display = "none";
}