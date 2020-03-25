ant, material-ui, telerik
Atlassian kit?
https://react.semantic-ui.com
MaterialUI
react-strap
Bootstrapa
https://reakit.io/
https://reactjsexample.com/

Error:

```console
Error: resolve-url-loader: CSS error
source-map information is not available at url() declaration (found orphan CR, try removeCR option)
```

Source:

```css
body {
  background-image: url("./../../assets/img/bg.jpg"); // AFTER THIS BG-IMG SHOULD BE NOTHING ... VERY ODD
  color: red;
}
```

BEM [ block :: element :: modifier ]

```css
.site-block__head--active {
}
.site-block__head--hide {
}
.site-block__head--selected {
}
```

https://bem.github.io/bem-bl/pages/naming/naming.en.html

### Naming convention

### Block name

Block name is a keyword (usually in English) that makes sence what is a block about.
A block name may be composed of several words separated with hyphen.

# Block prefix

A block name usually has a `prefix` that helps to indentify block purpose.

`b-` (от block)

Prefix for a block with an appearance on a page.

# Example

```css
b-menu-horiz
```

Has concrete appearance on a page.

i- (от include)
This is a `prefix` for an abstract block that does not exist on its own account but is used to build other blocks.
That is also for a block that does not have an appearance but realize some functionality.

Example

```css
i-menu
```

You cannot see it on the page. It provides a functionality used by `b-menu-horiz` and `b-menu-vert` blocks.

# Element name

Full element name is to indentify which block this element belongs to.
Full element name is formed according to this scheme: `b-block-name__element-name`

# Examples

```css
  b-menu-horiz__item
  b-popup__content
```

# Block modifier's name

Full name for a modifier of a block is to indetify which block this modifier belongs to.
Full modifier name of a block is formed accroding to a scheme: `b-block-name_modofier-name_modifier-value`.

# Examples

```css
    b-link_type_pseudo
    b-menu-horiz_type_simple
    b-popup_direction_up
```

# Element modifier's name

Full name for a modifier of an element is to indentify which element (and which block) this modifier belongs to.
Full modifier name of an element is formed according to a scheme: `b-block-name__element-name_modifier-name_modifier-value`.

# Examples

```css
    b-menu-horiz__item_state_current
```
