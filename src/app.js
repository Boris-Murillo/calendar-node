require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routes');

app.get('/', (req, res) => {
    res.send('Hello World!');
    });
app.listen(3000, () => console.log('Server running on port 3000'));

// app.use(cors());
// app.use(router);

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });