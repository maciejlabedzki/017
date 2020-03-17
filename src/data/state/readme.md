```js
// TEST : NESTED STATE REMOVE Ok is working update but is problematic
favouritesRemove = () => {
  this.setState(
    prevState => ({
      edit: {
        long: { ...prevState["edit"]["long"], b: 3 },
        short: { ...prevState["edit"]["short"] }
      }
    }),
    () => {
      //console.log(this.state.edit);
    }
  );
};
```

```js
// TEST : NESTED STATE REMOVE
favouritesRemove = () => {
  this.setState(
    prevState => ({
      edit: {
        ...prevState["edit"],
        long: { ...prevState["edit"]["long"], b: 3 }
      }
    }),
    () => {
      //console.log(this.state);
    }
  );
};
```
