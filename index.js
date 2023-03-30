import express from "express";
import fs from "fs";

const PORT = 8080;
const app = express();

app.use((req, res) => {
  fs.appendFile('logger.txt', `Address: ${req.ip}`, err => {
    console.log('log has been wrouten');
  });
})

app.get('/', (req, res) => {
  res.cookie('someCookie', 'test cookie', {
    httpOnly: true,
    maxAge: 2000
  });
  res.cookie('anotherCookie', 'another cookie');

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

app.get('/category/:categoryId', (req, res) => {
  const categoryId = req.params['categoryId'];
  res.send(`request param is ${categoryId}`);
})
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
