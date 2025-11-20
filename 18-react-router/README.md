# React Router DOM

## BrowserRouter

A `<BrowserRouter>` stores the current location in the browser's address bar using clean URLs and navigates using the browser's built-in history stack.

## HashRouter

`<HashRouter>` is for use in web browsers when the URL should not (or cannot) be sent to the server for some reason. This may happen in some shared hosting scenarios where you do not have full control over the server. In these situations, `<HashRouter>` makes it possible to store the current location in the hash portion of the current URL, so it is never sent to the server.


## MemoryRouter

A `<MemoryRouter>` stores its locations internally in an array. Unlike `<BrowserHistory>` and `<HashHistory>`, it isn't tied to an external source, like the history stack in a browser. This makes it ideal for scenarios where you need complete control over the history stack, like testing.

## StaticRouter

`<StaticRouter>` is used to render a React Router web app in node. Provide the current location via the location prop.`%3C%3E`
