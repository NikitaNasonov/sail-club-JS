/* Переключение темы */

let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');

darkThemeButton.onclick = function () {
    lightThemeButton.classList.remove('active');
    darkThemeButton.classList.add('active');
    document.body.classList.add('dark');
}

lightThemeButton.onclick = function () {
    darkThemeButton.classList.remove('active');
    lightThemeButton.classList.add('active');
    document.body.classList.remove('dark');
}

/* Переключение шрифта */

let fontSansSerifButton = document.querySelector('.font-button-sans-serif');
let fontSerifButton = document.querySelector('.font-button-serif');

fontSansSerifButton.onclick = function () {
    fontSerifButton.classList.remove('active');
    fontSansSerifButton.classList.add('active');
    document.body.classList.remove('serif');
}

fontSerifButton.onclick = function () {
    fontSansSerifButton.classList.remove('active');
    fontSerifButton.classList.add('active');
    document.body.classList.add('serif');
}