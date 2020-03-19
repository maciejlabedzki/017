### delete item

var myObj = {'test' : {'key1' : 'value', 'key2': 'value'}}
delete myObj.test.key1;

{'test' : {'key2': 'value'}}

### delete item

```js
handleDelete = itemId => {
  const items = this.state.items.filter(item => item.id !== itemId);
  this.setState({ items: items });
};
```

### run server for tests

```
json-server --watch src/data/json/test.json --port 3333
```
