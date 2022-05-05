setInterval(changeColor, 1000);
function changeColor() {
    var x = document.getElementById("marquee");

    if (x.style.color == "red")
        x.style.color = "white";
    else x.style.color = "red"


}