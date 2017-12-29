{
    'use strict';
    (function () {
        function whenLoaded() {
            getmdlSelect.init('.getmdl-select');
        };

        window.addEventListener ?
            window.addEventListener("load", whenLoaded, false) :
            window.attachEvent && window.attachEvent("onload", whenLoaded);

    }());

    var getmdlSelect = {
        _addEventListeners: function (dropdown) {
            var input = dropdown.querySelector('input');
            var hiddenInput = dropdown.querySelector('input[type="hidden"]');
            var list = dropdown.querySelectorAll('li');
            var menu = dropdown.querySelector('.mdl-js-menu');
            var arrow = dropdown.querySelector('.mdl-icon-toggle__label');
            var label = '';
            var previousValue = '';
            var previousDataVal = '';
            var opened = false;

            var setSelectedItem = function (li) {
                var value = li.textContent.trim();
                input.value = value;
                list.forEach(function (li) {
                    li.classList.remove('selected');
                });
                li.classList.add('selected');
                dropdown.MaterialTextfield.change(value); // handles css class changes
                setTimeout(function () {
                    dropdown.MaterialTextfield.updateClasses_(); //update css class
                }, 250);

                // update input with the "id" value
                hiddenInput.value = li.dataset.val || '';

                previousValue = input.value;
                previousDataVal = hiddenInput.value;

                if ("createEvent" in document) {
                    var evt = document.createEvent("HTMLEvents");
                    evt.initEvent("change", false, true);
                    menu['MaterialMenu'].hide();
                    input.dispatchEvent(evt);
                } else {
                    input.fireEvent("onchange");
                }
            }

            var hideAllMenus = function () {
                opened = false;
                input.value = previousValue;
                hiddenInput.value = previousDataVal;
                if (!dropdown.querySelector('.mdl-menu__container').classList.contains('is-visible')) {
                    dropdown.classList.remove('is-focused');
                }
                var menus = document.querySelectorAll('.getmdl-select .mdl-js-menu');
                [].forEach.call(menus, function (menu) {
                    menu['MaterialMenu'].hide();
                });
                var event = new Event('closeSelect');
                menu.dispatchEvent(event);
            };
            document.body.addEventListener('click', hideAllMenus, false);

            //hide previous select after press TAB
            dropdown.onkeydown = function (event) {
                if (event.keyCode == 9) {
                    input.value = previousValue;
                    hiddenInput.value = previousDataVal;
                    menu['MaterialMenu'].hide();
                    dropdown.classList.remove('is-focused');
                }
            };

            //show select if it have focus
            input.onfocus = function (e) {
                menu['MaterialMenu'].show();
                menu.focus();
                opened = true;
            };

            input.onblur = function (e) {
                e.stopPropagation();
            };

            //hide all old opened selects and opening just clicked select
            input.onclick = function (e) {
                e.stopPropagation();
                if (!menu.classList.contains('is-visible')) {
                    menu['MaterialMenu'].show();
                    hideAllMenus();
                    dropdown.classList.add('is-focused');
                    opened = true;
                } else {
                    menu['MaterialMenu'].hide();
                    opened = false;
                }
            };

            input.onkeydown = function (event) {
                if (event.keyCode == 27) {
                    input.value = previousValue;
                    hiddenInput.value = previousDataVal;
                    menu['MaterialMenu'].hide();
                    dropdown.MaterialTextfield.onBlur_();
                    if (label !== '') {
                        dropdown.querySelector('.mdl-textfield__label').textContent = label;
                        label = '';
                    }
                }
            };

            menu.addEventListener('closeSelect', function (e) {
                input.value = previousValue;
                hiddenInput.value = previousDataVal;
                dropdown.classList.remove('is-focused');
                if (label !== '') {
                    dropdown.querySelector('.mdl-textfield__label').textContent = label;
                    label = '';
                }
            });

            //set previous value and data-val if ESC was pressed
            menu.onkeydown = function (event) {
                if (event.keyCode == 27) {
                    input.value = previousValue;
                    hiddenInput.value = previousDataVal;
                    dropdown.classList.remove('is-focused');
                    if (label !== '') {
                        dropdown.querySelector('.mdl-textfield__label').textContent = label;
                        label = '';
                    }
                }
            };

            if (arrow) {
                arrow.onclick = function (e) {
                    e.stopPropagation();
                    if (opened) {
                        menu['MaterialMenu'].hide();
                        opened = false;
                        dropdown.classList.remove('is-focused');
                        dropdown.MaterialTextfield.onBlur_();
                        input.value = previousValue;
                        hiddenInput.value = previousDataVal;
                    } else {
                        hideAllMenus();
                        dropdown.MaterialTextfield.onFocus_();
                        input.focus();
                        menu['MaterialMenu'].show();
                        opened = true;
                    }
                };
            }

            [].forEach.call(list, function (li) {
                li.onfocus = function () {
                    dropdown.classList.add('is-focused');
                    var value = li.textContent.trim();
                    input.value = value;
                    if (!dropdown.classList.contains('mdl-textfield--floating-label') && label == '') {
                        label = dropdown.querySelector('.mdl-textfield__label').textContent.trim();
                        dropdown.querySelector('.mdl-textfield__label').textContent = '';
                    }
                };

                li.onclick = function () {
                    setSelectedItem(li);
                };

                if (li.dataset.selected) {
                    setSelectedItem(li);
                }
            });
        },
        init: function (selector) {
            var dropdowns = document.querySelectorAll(selector);
            [].forEach.call(dropdowns, function (dropdown) {
                getmdlSelect._addEventListeners(dropdown);
                componentHandler.upgradeElement(dropdown);
                componentHandler.upgradeElement(dropdown.querySelector('ul'));
            });
        }
    };
}
