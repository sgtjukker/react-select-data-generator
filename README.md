# react-select-data-generator

I wanted to have a simple way to get an array of data into the cool component I found on https://react-select.com/home and therefore I made this very small project which I had great use for since I needed to re-generate my data numerous times based on added values.

So maybe someone else can have use for this generator when using the react-select component?

The code will generate a json file with value, label and a random colour (as needed for the react-select.component itself) but also a random uuid4 id.

To run project:

```
  $ npm install
```

Run generator

```
  $ node index.js
```

Output will be generated in a file called generatedData.json
