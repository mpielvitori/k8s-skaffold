/* eslint-disable import/extensions */
import express from 'express';
import bodyParser from 'body-parser';
import config from 'config';
import mongoose from 'mongoose';
import product from './routes/product.js';

const app = express();

// Set up mongoose connection
console.log('DB!!! ', config.dbUri);
mongoose.connect(
  config.dbUri,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
).then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('MongoDB connection error ', err));
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use('/product', product);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is up and running on port numner ${port}`);
});

export default app;
