import { IncomingMessage, ServerResponse } from 'http';
import { HTTP_CODES, HTTP_METHODS } from '../Shared/Model';
import { UsersDBAccess } from '../User/UsersDbAccess';
import { BaseRequestHandler } from './BaseRequestHandler';
import { Utils } from './Utils';

export class UsersHandler extends BaseRequestHandler {
  private usersDBAccess: UsersDBAccess = new UsersDBAccess();

  constructor(req: IncomingMessage, res: ServerResponse) {
    super(req, res);
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

    if (!parsedUrl) return;

    const userId = parsedUrl.query.id;

    if (!userId) {
      return this.respondBadRequest('UserId not present in request.');
    }

    const user = await this.usersDBAccess.getUserById(userId as string);

    if (!user) {
      return this.handleNotFound();
    }

    this.respondJsonObject(HTTP_CODES.OK, user);
  }
}
