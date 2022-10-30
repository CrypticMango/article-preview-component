const panel = document.getElementById("panel");
const shareButton = document.getElementById("share-button-main");
const shareButtonPanel = document.getElementById("share-button-panel");

shareButton.addEventListener("click", showPanel);
shareButtonPanel.addEventListener("click", showMichelle);

function showPanel() {
    panel.style.display = "flex";
}

function showMichelle() {
    panel.style.display = "none";
}