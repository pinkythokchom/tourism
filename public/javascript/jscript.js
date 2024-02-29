//Hijagang
function toggleText() {
    let points =
        document.getElementById("points");

    let showMoreText =
        document.getElementById("moreText");

    let buttonText =
        document.getElementById("textButton");
    if (points.style.display === "none") 
    {
        showMoreText.style.display = "none";
        points.style.display = "inline";
        buttonText.innerHTML = "see more";
    }
    else {
        showMoreText.style.display = "inline";
        points.style.display = "none";
        buttonText.innerHTML = "see less";
    }
}
//Home