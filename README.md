    
# getmdl-select
Material Design Lite selectfield component [material-design-lite](https://github.com/google/material-design-lite)

## Live Example

![alt tag](https://raw.github.com/CreativeIT/getmdl-select/gh-pages/lib/index_mdl/select_mdl.gif)

Check out the [example](http://creativeit.github.io/getmdl-select/)

## Install

There are three ways to install getmdl-select:

 1. Using [npm](http://npmjs.org/): 
    Use this command in your command line: 
    ```bash
    npm install getmdl-select
    ```
 2. Using [Bower](http://bower.io/):
    Use this command in your command line: 
    ```bash
    bower install getmdl-select
    ```
 3. Clone the repo using Git:

    ```bash
    git clone https://github.com/CreativeIT/getmdl-select.git
    ```
    
    (Alternatively you can [download](https://github.com/CreativeIT/getmdl-select/archive/master.zip)
this repository.)
    And then:
    
    ```bash
    cd getmdl-select   
    npm install
    ```

## Basic use
To use any MDL component, you must include the minified CSS and JavaScript files using standard relative-path references in the `<head>` section of the page, as described in the MDL Introduction.
   ```html
   <!-- getmdl -->
   <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
   <link rel="stylesheet" href="your_path_to/material-design-lite/material.min.css">
   <script defer src="your_path_to/material-design-lite/material.min.js"></script>   
   <!--getmdl-select-->   
   <link rel="stylesheet" href="path_to/getmdl-select/getmdl-select.min.css">
   <script defer src="path_to/getmdl-select/getmdl-select.min.js"></script>
   ```

### Example

Select field.
 ```html
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select">
      <input class="mdl-textfield__input" id="country" name="country" value="Belarus" type="text" readonly tabIndex="-1" data-val="BLR"/>
        <label class="mdl-textfield__label" for="country">Country</label>
        <ul class="mdl-menu mdl-menu--bottom-left mdl-js-menu" for="country">
          <li class="mdl-menu__item" data-val="BLR">Belarus</li>
          <li class="mdl-menu__item" data-val="RUS">Russia</li>
        </ul>
    </div>
 ```
### Important
If you want to use more than one getmdl-select item use different ids for inputs and don't forget to change `ul` and `label`'s `for` attributes. It works wrong without this.

## Configuration options 
#### Dynamically usage
For dynamically usage, you must add `getmdlSelect.init(cssSelector)` in javascript code, (where cssSelector, for example, is `".getmdl-select"` or `"#mySelect"`), after new item is created or any new element added to existing list. 

#### data-val
Every `li` should have its own `data-val` attribute. Choosing any element of select you change `input`'s `data-val` property, which you can get using `document.querySelector(selector).getAttribute('data-val');`, where selector is your `input`'s id.

#### Width
Initial Select takes the default width (300px). If you want that Select automatically adapt to the maximum width add class `getmdl-select__fullwidth`.

#### Height
Select automatically adapt to the maximum height. If you want to use small height (300px) and see scroll bar, add class `getmdl-select__fix-height`.    
    
## LICENSE
See the [LICENSE file](https://github.com/CreativeIT/getmdl-select/blob/master/LICENSE.txt) for license rights and limitations (MIT).

## Support the project
* Star the repo
* Create issue report or feature request
* [Tweet about it](https://twitter.com/CreativeITeam)
* Follow us on [Twitter](https://twitter.com/CreativeITeam)
