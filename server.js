const express = require('express');
const config = require('./config/config');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname,'public')));

app.use('/css/', express.static(path.join(__dirname, 'node_modules', 'toastr', 'build')));
app.use('/js/', express.static(path.join(__dirname, 'node_modules', 'toastr', 'build')));

app.use('/css/', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css')));
app.use('/js/', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'js')));

app.use('/css/', express.static(path.join(__dirname, 'node_modules', 'font-awesome', 'css')));
app.use('/fonts/', express.static(path.join(__dirname, 'node_modules', 'font-awesome', 'fonts')));

app.use('/css/', express.static(path.join(__dirname, 'node_modules', 'ionicons', 'css')));
app.use('/fonts/', express.static(path.join(__dirname, 'node_modules', 'ionicons', 'fonts')));

app.use('/js/', express.static(path.join(__dirname, 'node_modules', 'jquery', 'dist')));

app.use('/js/', express.static(path.join(__dirname, 'node_modules', 'jquery.easing')));

app.set('views', path.join('./', 'views'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('indexPublic', {
    title: 'Carlos Corti',
    profile: 'Fullstack Developer',
    email: 'carlosportfoliodev@gmail.com',
    phone: '+34 667190358',
  });
});

const emailRouter = require ('./lib/routers/email.Router')()

app.use('/api/mail', emailRouter);

app.use((req, res, next) => {
  res.status(404).send('Sorry cant find that!<br><a href="/">go back</a>');
});

app.listen(config.port, () => {
  console.info(`Running on port ${config.port}...`);
});
