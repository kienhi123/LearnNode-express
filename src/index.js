const exprss = require('express');
const path = require('path')
const morgan = require('morgan');
const handlebars = require('express-handlebars')
const hbs = require('express-handlebars')
const app = exprss()
const port = 3000



app.use(exprss.static(path.join(__dirname, 'public')));
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
app.use(morgan('combined'))


app.get('/', (req, res) => {
    res.render('home')
})

app.get('/news', (req, res) => {
    res.render('news')
})

app.listen(port, () => console.log("Conllect thành công"));