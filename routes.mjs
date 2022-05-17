import { resolve } from 'path';
import db from './models/index.mjs';
import initLoginController from './controllers/login.mjs';

export default function routes(app) {
  const LoginController = initLoginController(db);
  app.post('/login', LoginController.submitLogin);

  // special JS page. Include the webpack index.html file
  app.get('/', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
}

