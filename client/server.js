const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const taskRouter = require('../server/routes/taskRouter')
//serve static files (html, css, assets)


app.use(express.static(path.join(__dirname, './')));



// app.use('/', (req, res) => {
//   return res.status(200).sendFile('../client/index.html');
// });

// app.use('/tasks', taskRouter);

// app.use('*', (req, res) => {
//     res.status(404).send('Page didn\'t load');
// })

// app.use((err, req, res, next) => {
//   console.log(err);
// });

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`)
});

module.exports = app;