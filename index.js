const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

// Add more routes as needed

const port = 3000; // You can change this to any port number you prefer
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


app.get('/design-digest', (req, res) => {
  res.render('design-digest'); // Render the design-digest.ejs template
});
