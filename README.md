    
# getmdl-select
Material Design Lite selectfield component [material-design-lite](https://github.com/google/material-design-lite)

## Live Example

Check out the [jsfiddle](http://jsfiddle.net/franckevva/1b90289k/3/)

## Basic use
To use any MDL component, you must include the minified CSS and JavaScript files using standard relative-path references in the `<head>` section of the page, as described in the MDL Introduction.

#### Example

Select field.
 ```html
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label creative-dropdown">
      <input class="mdl-textfield__input" value="Belarus" type="text" id="country" readonly tabIndex="-1" />
        <label class="mdl-textfield__label" for="country">Country</label>
        
        <ul class="mdl-menu mdl-menu--bottom-left mdl-js-menu" for="country">
          <li class="mdl-menu__item">Belarus</li>
          <li class="mdl-menu__item">Russia</li>
          ...
        </ul>
    </div>
 ```
    
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
