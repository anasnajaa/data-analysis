require("dotenv").config();
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'ejs');

app.use(express.json());

app.get('/', (req, res, next) => {
    res.render("pages/index", {

    });
});

app.use('/answers', require('./routes/pages'));

app.all('*', (req, res) => {
    res.status(404).json({ message: "Not Found" });
})

app.listen(process.env.PORT, () => console.log(`Server Started at port: ${process.env.PORT}`));