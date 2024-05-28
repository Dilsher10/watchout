require("dotenv").config();
const express = require('express');
const connectDb = require('./utils/db');
const userRouter = require('./router/user-router');
const adminRouter = require('./router/admin-router');
const postRouter = require('./router/post-router');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());

const PORT = process.env.PORT;
app.use(express.json());


app.use(express.static(path.join(__dirname, '../client/out')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/out', 'index.html'));
});



app.use('/api/auth', userRouter);
app.use('/api/auth', adminRouter);
app.use('/api/auth', postRouter);



connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});