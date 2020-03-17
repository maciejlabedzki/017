var myObj = {'test' : {'key1' : 'value', 'key2': 'value'}}
delete myObj.test.key1;

{'test' : {'key2': 'value'}}

handleDelete = itemId => {
const items = this.state.items.filter(item => item.id !== itemId);
this.setState({ items: items });
};
