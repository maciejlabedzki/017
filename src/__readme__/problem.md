### 1 - scss - img inside background url

```scss
div {
  background: url("src/img.png");
}
```

### 2 - nested changes on state

```js
this.setState(prevState => ({
  ...prevState,
  someProperty: {
    ...prevState.someProperty,
    someOtherProperty: {
      ...prevState.someProperty.someOtherProperty,
      anotherProperty: {
        ...prevState.someProperty.someOtherProperty.anotherProperty,
        flag: false
      }
    }
  }
}));
```
