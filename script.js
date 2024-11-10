function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const button = document.querySelector(".emailButton");
button.addEventListener("click", function() {
    const copyText = document.getElementById("myEmail");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("copied!")
});
// function copyEmail() {
//     const copyText = document.getElementById("myEmail");
//     copyText.select();
//     copyText.selectSelectionRange(0, 99999);
//     navigator.clipboard.writeText(copyText.value);
//     alert("copied!")
// }