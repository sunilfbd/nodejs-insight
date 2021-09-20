const mongoose = require('mongoose');

// CONNECTIING WITH DATABASE - using Mongoose
mongoose.connect(process.env.DB_CONNECTION)
.then(() =>{
    console.log('================ Connection Successfull =================');
}).catch((err) => {
    console.log('---------------- error during DB Connection ----------------', err);
})
