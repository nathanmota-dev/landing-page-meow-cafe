document.addEventListener("DOMContentLoaded", function () {
    const hamburguerIcon = document.getElementById("hamburguerIcon");
    const navBar = document.querySelector(".nav-bar");

    hamburguerIcon.addEventListener("click", function () {
        const iconImage = hamburguerIcon.querySelector('img');

        if (hamburguerIcon.classList.contains("open")) {
            hamburguerIcon.classList.remove("open");
            iconImage.src = "assets/img/menu_white_36dp.svg";
        } else {
            hamburguerIcon.classList.add('open');
            iconImage.src = "assets/img/close_white_36dp.svg";
        }

        navBar.classList.toggle("show-nav-bar");
    });
});
