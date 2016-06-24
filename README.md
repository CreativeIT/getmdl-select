    
# getmdl-select
Material Design Lite selectfield component [material-design-lite](https://github.com/google/material-design-lite)

## Live Example

![alt tag](https://raw.github.com/CreativeIT/getmdl-select/gh-pages/lib/index_mdl/select_mdl.gif)

Check out the [example](http://creativeit.github.io/getmdl-select/)

## Basic use
To use any MDL component, you must include the minified CSS and JavaScript files using standard relative-path references in the `<head>` section of the page, as described in the MDL Introduction.
   ```html
   <!-- getmdl -->
   <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
   <link rel="stylesheet" href="https://code.getmdl.io/1.1.1/material.indigo-pink.min.css">
   <script defer src="https://code.getmdl.io/1.1.1/material.min.js"></script>   
   <!--getmdl-select-->
   <script src="getmdl-select.min.js"></script>
   <link rel="stylesheet" href="getmdl-select.min.css">
   ```

### Example

Select field.
 ```html
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select">
      <input class="mdl-textfield__input" value="Belarus" type="text" id="country" readonly tabIndex="-1" data-val="BLR"/>
        <label class="mdl-textfield__label" for="country">Country</label>
        <ul class="mdl-menu mdl-menu--bottom-left mdl-js-menu" for="country">
          <li class="mdl-menu__item" data-val="BLR">Belarus</li>
          <li class="mdl-menu__item" data-val="RUS">Russia</li>
        </ul>
    </div>
 ```
 
### Dynamically usage
For dynamically usage, you must add `getmdlSelect.init(cssSelector)` in javascript code, (where cssSelector, for example, is `".getmdl-select"` or `"#mySelect"`), after new item is created. 

### Width
Select automatically adapt to the maximum width of values. If you want to use the default width, add class `getmdl-select__fullwidth`.
    
## Install

 * [Bower](http://bower.io/): `bower install getmdl-select`
 * [npm](http://npmjs.org/): `npm install getmdl-select`
 
### Download / Clone

Clone the repo using Git:

```bash
git clone https://github.com/CreativeIT/getmdl-select.git
```

Alternatively you can [download](https://github.com/CreativeIT/getmdl-select/archive/master.zip)
this repository.

### Build

To get started modifying the components or the docs, first install the necessary
dependencies, from the root of the project:

```bash
npm install 
```

## LICENSE
See the [LICENSE file](https://github.com/CreativeIT/getmdl-select/blob/master/LICENSE.txt) for license rights and limitations (MIT).