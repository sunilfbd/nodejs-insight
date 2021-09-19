const express = require('express');
const cors = require('cors');
require('dotenv/config')

const app = express();

// MIDDLEWARES
app.use(cors());


// Post Routes
const postRoutes = require('./routes/posts');
app.use('/posts', postRoutes);




// index page
// app.set('view engine', 'ejs');
// app.get('/', (req, res) => {
//     res.render('../views/index.ejs', {root: __dirname});
// });  

app.listen(process.env.PORT)