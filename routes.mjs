import { resolve } from 'path';
import db from './models/index.mjs';
import initLoginController from './controllers/login.mjs';
import initRequestController from './controllers/request.mjs'

export default function routes(app) {
  const LoginController = initLoginController(db);
  const RequestController = initRequestController(db);

  app.post('/login', LoginController.submitLogin);

  app.post('/request', RequestController.submitRequest);

  app.get('/requests', RequestController.getAllRequests);

  app.get('/request/:id', RequestController.getPartnersForOneRequest);

  app.put('/request/:id', RequestController.updateRequestAfterAssigning);
  
  app.get('/', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
}

