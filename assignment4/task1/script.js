
function swapTheme() {
    //write your code
    const app = document.querySelector("#app")
    const btn = document.querySelector('#swap');
    const btn_theme = btn.getAttribute("class");
    const theme = app.getAttribute("class");
    app.setAttribute("class", theme === 'day' ? "night" : "day");
    btn.setAttribute("class", btn_theme === 'button_day' ? "button_night" : "button_day");
}