# MyTable

This is a Vue project that builds a Web Component that can easily be used in any HTML page.
Web components are supported by all browsers in a similar way to native HTML elements.

You can check an example of how to embed the component on a HTML file in 'localhost:[PORT]/test.html'

App root folder `localhost:[PORT]` 


## Project Setup

### BEFORE START: You need latest version of Node installed in your machine!

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```
after running, you will see a link for the localhost server


### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Preview in Production (need to build first)

```sh
npm run preview
```
after running, you will see a link for the localhost server

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Embed component in a HTML page

 - Copy the js script from /dist/assets folder to a public HTTP folder.
 - import the script into the HTML page. e.g.:
 ```
   <script type="module" crossorigin src="/assets/index-B7bjMn1K.js"></script>
 ```
  - include the HTML custon tag `<my-table data="[]"></my-table> passing the proper value on the data pardameter as string (you can convert from JSON using JSON.stringify(data))

  - pass any optional parameter 
   - captation (default: '') => alternative text describing the table for improved accessibility
   - upColor (default: '#ecf1b6') => background colour from metrics with a positive trend
   - downColor(default: '#f7cfcc') => background colour from metrics with a negative trend

    ```
        <my-table data="[]" captation="captation text" upColor="blue" downColor="yellow"></my-table>
    ```

# Project assumptions and limitations
- support only 2 dimensions
- basic styling, easily extendable
- build as a Web Component (part of Web specifications and supported by all browsers)
- can add multiple tables in the same page
- supports any number of metrics
- basic support for accessibility using HTML5 features

# Future improvements
 - Using Vue to create web components create huge Javascript files and in only recomended for libraries of components.
 Alternatives include using 'petit-vue' or other frameworks like Stelve
 - Component shold be more flexible to support a flexible number of dimensions (probably in the range 1-5 dimensions, as adding more dimensions can break the mobile view with current layout)
