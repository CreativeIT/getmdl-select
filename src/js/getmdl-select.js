{
    'use strict';
    window.onload = function () {
        getmdlSelect.init('.getmdl-select');
        document.addEventListener("DOMNodeInserted", function (ev) {
            if (ev.relatedNode.querySelectorAll(".getmdl-select").length > 0) {
                componentHandler.upgradeDom();
            }
        }, false);
    };

    var getmdlSelect = {
        addEventListeners: function (dropdown) {
            var input = dropdown.querySelector('input');
            var list = dropdown.querySelectorAll('li');
            var menu = dropdown.querySelector('.mdl-js-menu');

            //show menu on mouse down or mouse up
            input.onkeydown = function (event) {
                if (event.keyCode == 38 || event.keyCode == 40) {
                    menu['MaterialMenu'].show();
                }
            };

            //return focus to input
            menu.onkeydown = function (event) {
                if (event.keyCode == 13) {
                    input.focus();
                }
            };

            [].forEach.call(list, function (li) {
                li.onclick = function () {
                    input.value = li.textContent;
                    if ("createEvent" in document) {
                        var evt = document.createEvent("HTMLEvents");
                        evt.initEvent("change", false, true);
                        input.dispatchEvent(evt);
                    } else {
                        input.fireEvent("onchange");
                    }
                };
            });
        },
        init: function (selector) {
            var dropdowns = document.querySelectorAll(selector);
            [].forEach.call(dropdowns, function (i) {
                getmdlSelect.addEventListeners(i);
                i.style.width = i.querySelector('.mdl-menu').clientWidth + 'px';
            });
        }
    };
}
