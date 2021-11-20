document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector("#switch-theme").addEventListener('click', switchTheme);
});

function switchTheme() {
    let bodyCardClassList = document.querySelector("body").classList;
    bodyCardClassList.toggle("_dark-theme");
    bodyCardClassList.toggle("_light-theme");
}