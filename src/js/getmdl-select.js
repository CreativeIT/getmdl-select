{
    'use strict';
    window.onload = function () {
        getmdlSelect.init('.getmdl-select');
        document.addEventListener("DOMNodeInserted", function (ev) {
            componentHandler.upgradeDom();
        }, false);
    };

    var getmdlSelect = {
        addEventListeners: function (dropdown) {
            var input = dropdown.querySelector('input');
            var list = dropdown.querySelectorAll('li');

            [].forEach.call(list, function (li) {
                li.onclick = function () {

                    dropdown.MaterialTextfield.change(li.textContent); // handles css class changes
                    
                    // update input with the "id" value
                    input.dataset.val = li.dataset.val || '';

                    if ("createEvent" in document) {
                        var evt = document.createEvent("HTMLEvents");
                        evt.initEvent("change", false, true);
                        input.dispatchEvent(evt);
                    } else {
                        input.fireEvent("onchange");
                    }
                }
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
