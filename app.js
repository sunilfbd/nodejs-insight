const express = require('express');
const cors = require('cors');
require('dotenv/config')

const app = express();
app.use(cors());

app.set('view engine', 'ejs');

const port = process.env.PORT || 4000;

app.listen(port, () =>{
    console.log(`server started at ${port}`);
    console.log(process.env.DB_CONNECTION);
})

// index page
app.get('/', (req, res) => {
    res.render('../views/index.ejs', {root: __dirname});
});  