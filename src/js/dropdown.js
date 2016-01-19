{
    'use strict';
    window.onload = function () {
        var dropdowns = document.querySelectorAll('.creative-dropdown');
        [].forEach.call(dropdowns, function (i) {
            addEventListeners(i);
        })
    };

    var addEventListeners = function (dropdown) {
        var input = dropdown.querySelector('input');
        var list = dropdown.querySelectorAll('li');
        var icon = dropdown.querySelector('i');

        [].forEach.call(list, function (li) {
            li.onclick = function () {
                input.value = li.textContent;
            }
        });
    };


}