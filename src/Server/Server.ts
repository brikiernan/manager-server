import { createServer, IncomingMessage, ServerResponse } from 'http';
import { Authorizer } from '../Auth/Authorizer';
import { LoginHandler } from './LoginHandler';
import { UsersHandler } from './UsersHandler';
import { Utils } from './Utils';

export class Server {
  private authorizer: Authorizer = new Authorizer();

  public startServer() {
    createServer(async (req: IncomingMessage, res: ServerResponse) => {
      const basePath = Utils.getUrlBasePath(req.url);

      switch (basePath) {
        case 'login':
          await new LoginHandler(req, res, this.authorizer).handleRequest();
          break;
        case 'users':
          await new UsersHandler(req, res, this.authorizer).handleRequest();
          break;
        default:
          break;
      }

      res.end();
    }).listen(8080);
    console.log('server started');
  }
}
