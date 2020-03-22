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
