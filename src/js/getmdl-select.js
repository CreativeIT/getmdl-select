{
    'use strict';
    window.onload = function () {
        getmdlSelect.init(document);
        document.addEventListener("DOMNodeInserted", function (ev) {
            componentHandler.upgradeDom();
        }, false);
    };

    var getmdlSelect = {
        addEventListeners : function (dropdown) {
            var input = dropdown.querySelector('input');
            var list = dropdown.querySelectorAll('li');

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
                }
            });
        },
        init: function (dropdown) {
            if(dropdown.classList && dropdown.classList.contains('getmdl-select')) {
                this.addEventListeners(dropdown);
            }
            else{
                var dropdowns = dropdown.querySelectorAll('.getmdl-select');
                [].forEach.call(dropdowns, function (i) {
                    getmdlSelect.addEventListeners(i);
                });
            }
        }
    };
}
