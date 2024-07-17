const newRouter = require('./news');
const siteRouter = require('./site');
function route(app) {
    app.use('/news', newRouter);

    app.use('/', siteRouter);

    app.post('/search', (req, res) => {
           res.render('search');
        console.log(req.body.q);
    });
}

module.exports = route;
