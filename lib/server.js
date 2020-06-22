import express from 'express';
import config from '../config/config';
import path from 'path';
import bodyParser from 'body-parser';
import assets from './assets/assets.json';
import compression from 'compression';
import helmet from 'helmet';

const app = express();

app.use(helmet());

app.use(compression());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.set('views', path.join('./', 'views'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Carlos Corti',
    profile: 'Fullstack Developer',
    email: 'carlosportfoliodev@gmail.com',
    phone: '+34 667190358',
    assets,
  });
});

const emailRouter = require('./routers/email.Router')();

app.use('/api/mail', emailRouter);

app.use((req, res) => {
  res.status(404).send('Sorry cant find that!<br><a href="/">go back</a>');
});

app.listen(config.port, () => {
  console.info(`Running on port ${config.port}...`);
});
