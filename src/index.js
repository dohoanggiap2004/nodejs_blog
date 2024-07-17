const path = require('path');
const handlebars = require('express-handlebars');
const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const route = require('./routers');
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
//http logger
app.use(morgan('combined'));

//template engine
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//routers
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
