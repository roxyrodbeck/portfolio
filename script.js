function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function copyEmail() {
    const emailElement = document.querySelector(".copy-email");
    const emailText = emailElement.textContent || emailElement.innerText;
    navigator.clipboard.writeText(emailText).then(() => {

    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
};