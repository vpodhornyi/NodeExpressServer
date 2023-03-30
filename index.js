import express from "express";

const PORT = 8080;
const app = express();

app.get('/', (req, res) => {
  res.send(`
  <h1>Main page</h1>
  <ul>
  <li><a href="/about">About</a></li>
  <li><a href="/products">Products</a></li>
</ul>
  `);
})

app.get('/about', (req, res) => {
  res.send("<h1>About page</h1>");
});

app.get('/products', (req, res) => {
  res.send("<h1>Products page</h1>");
});
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
