require("dotenv").config();
const express = require('express');
const connectDb = require('./utils/db');
const userRouter = require('./router/user-router');
const adminRouter = require('./router/admin-router');
const postRouter = require('./router/post-router');
const cors = require('cors');
const app = express();
app.use(cors());

const PORT = process.env.PORT;
app.use(express.json());


app.use('/auth', userRouter);
app.use('/auth', adminRouter);
app.use('/auth', postRouter);



connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});