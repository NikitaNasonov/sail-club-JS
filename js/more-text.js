/* Сокращенные/полный текст статьи */

// соберем в коллекцию все статьи с сокращенным текстом, т.к. нет смысла собирать все статьи, в полных нет кнопки more
let shortArticles = document.querySelectorAll('.blog-article.short');
let moreButton;

// переберем коллекцию в цикле
for (let article of shortArticles) {
    // в каждой статье найдем кнопку
    moreButton = article.querySelector('.more');
    // добавляем обрабочик клика на кнопку
    moreButton.onclick = function () {
        // переключаем класс на элементе
        article.classList.remove('short');
    }
}