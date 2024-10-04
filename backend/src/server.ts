import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import sequelize from '../src/config/database';
import routes from './routes';
import dotenv from 'dotenv';

dotenv.config();
// console.log("DB_USER:", process.env.DB_USER);
// console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
// console.log("DB_NAME:", process.env.DB_NAME);
// console.log("DB_HOST:", process.env.DB_HOST);

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', routes);

sequelize.authenticate()
  .then(() => console.log('Database connected!'))
  .catch((error) => console.log('Error:', error));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
