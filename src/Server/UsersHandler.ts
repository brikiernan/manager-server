import { IncomingMessage, ServerResponse } from 'http';
import { HTTP_CODES, HTTP_METHODS } from '../Shared/Model';
import { UsersDBAccess } from '../User/UsersDbAccess';
import { Handler } from './Model';
import { Utils } from './Utils';

export class UsersHandler implements Handler {
  private req: IncomingMessage;
  private res: ServerResponse;
  private usersDBAccess: UsersDBAccess = new UsersDBAccess();

  constructor(req: IncomingMessage, res: ServerResponse) {
    this.req = req;
    this.res = res;
  }

  async handleRequest(): Promise<void> {
    switch (this.req.method) {
      case HTTP_METHODS.GET:
        await this.handleGet();
        break;

      default:
        this.handleNotFound();
        break;
    }
  }

  private async handleGet() {
    const parsedUrl = Utils.getUrlQuery(this.req.url);
    console.log(parsedUrl?.query.id);
    const a = '5';
  }

  private async handleNotFound() {
    this.res.statusCode = HTTP_CODES.NOT_FOUND;
    this.res.write('Not found.');
  }
}
