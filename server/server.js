const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const taskRouter = require('./routes/taskRouter');


//serve static files (html, css, assets)
app.use(express.static(path.join(__dirname, '../client')));
//parse all incoming JSON bodies
app.use(express.json());
//parse all incoming urlencoded into JS
app.use(express.urlencoded({extended: true}));


app.use('/tasks', taskRouter);

app.use('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});



app.use('*', (req, res) => {
    res.status(404).send('Page didn\'t load');
})

app.use((err, req, res, next) => {
  console.log(err);
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`)
});

module.exports = app;