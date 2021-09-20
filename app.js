const express = require('express');
const cors = require('cors');
require('dotenv/config');
require('./db/connection');

const postRoutes = require('./routes/posts');

const app = express();

// MIDDLEWARES
app.use(cors());
app.use('/posts', postRoutes);


// Handling of EJS templates from server side
// index page
// app.set('view engine', 'ejs');
// app.get('/', (req, res) => {
//     res.render('../views/index.ejs', {root: __dirname});
// });  

app.listen(process.env.PORT)