Tabs

React, Components, State, Children, Intermediate

View on [GitHub](https://github.com/30-seconds/30-seconds-of-react/blob/master/snippets/Tabs.md)

Renders a tabbed menu and view component.

Define a TabItem component, pass it to the Tab and remove unnecessary nodes expect for TabItem by identifying the function's name in props.children.
Use the React.useState() hook to initialize the value of the bindIndex state variable to props.defaultIndex.
Use Array.prototype.map on the collected nodes to render the tab-menu and tab-view.
Define changeTab, which will be executed when clicking a <button> from the tab-menu.
changeTab executes the passed callback, onTabClick and updates bindIndex, which in turn causes a re-render, evaluating the style and className of the tab-view items and tab-menu buttons according to their index.
