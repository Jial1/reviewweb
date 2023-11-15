const express = require('express');
const path = require('path');

const cookieParser = require('cookie-parser');

const createError = require('http-errors');
const logger = require('morgan');
const { OAuth2Client } = require('google-auth-library');

// mongodb
const dotenv = require("dotenv");
dotenv.config();
const {connectDB} = require('./server/mongo');
connectDB();

const multer = require('multer');
var fs = require('fs');

const app = express();
const port = 3001;

// google cloud
const metadata = require('gcp-metadata');
const oAuth2Client = new OAuth2Client();
let aud;
async function audience() {
  if (!aud && (await metadata.isAvailable())) {
    const project_number = await metadata.project('numeric-project-id');
    const project_id = await metadata.project('project-id');
    aud = `/projects/${project_number}/apps/${project_id}`;
  }
  return aud;
}

async function validateAssertion(assertion) {
  if (!assertion) {
    return {};
  }
  const aud = await audience();
  const response = await oAuth2Client.getIapPublicKeys();
  const ticket = await oAuth2Client.verifySignedJwtWithCertsAsync(
    assertion,
    response.pubkeys,
    aud,
    ['https://cloud.google.com/iap']
  );

  // not in use
  const payload = ticket.getPayload();

  return {
    email: payload.email,
    sub: payload.sub,
  };
}

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// google cloud authentication continue
app.get('/', async (req, res) => {
  const assertion = req.header('X-Goog-IAP-JWT-Assertion');
  let email = 'None';
  try {
    const info = await indexRouter.validateAssertion(assertion);
    email = info.email;
  } catch (error) {
    console.error(error);
  }
  res.status(200).send(`Hello ${email}`).end();
});

const Review = require('./server/models/review');

// API endpoint to get reviews
app.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await Review.find().exec();
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


const upload = multer();

app.post('/postreview', upload.single('image'), async (req, res) => {
  //console.log(req);
  const assertion = req.header('X-Goog-IAP-JWT-Assertion');
  let userEmail = 'None';
  let username = 'None';

  try {
    const info = await validateAssertion(assertion);
    userEmail = info?.email ?? 'default@example.com';
    const atIndex = userEmail.indexOf('@');
    username = userEmail.substring(0, atIndex);
  } catch (error) {
    console.error(error);
  }

  const { beverage, rating, comment } = req.body;

  const newReview = new Review({
    beverageType: beverage,
    rating: rating,
    comment: comment,
    imageData: {data:req.file.buffer, contentType: req.file.mimetype},
    createdAt: new Date(),
    userID: username,
  });

  try {
    await newReview.save();
    res.redirect('/');
    // res.status(201).json({ message: 'Review successfully saved', reviewId: req.body });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));

module.exports = app;
