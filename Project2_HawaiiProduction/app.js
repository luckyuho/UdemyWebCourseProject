let themeColor = "#0f9e9e";

let header = document.querySelector("header");
let headerAnchor = document.querySelectorAll("header nav ul li a");


window.addEventListener("scroll", () => {
    if (window.scrollY != 0) {
        header.style.backgroundColor = "rgba(0,0,0, 0.5)";
        header.style.color = "white";
        headerAnchor.forEach(a => {
            a.style.color = "white";
        })
    } else {
        header.style = "";
        headerAnchor.forEach(a => {
            a.style.color = themeColor;
        })
    }
})

// localStorage practice
// let num = [1, 2, 3];
// localStorage.setItem("num", JSON.stringify(num));

// let num = JSON.parse(localStorage.getItem("num"));
// console.log(num);