import { log } from 'console';
import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello, world!'));
app.get('/delivery', (req, res) => res.send('OK'));
app.get('/error', (req, res) => res.status(500).send('Internal Server Error'));

app.listen(port, () =>
  console.log(`Test app listening at http://localhost:${port}`)
);
