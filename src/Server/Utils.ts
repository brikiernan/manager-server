import { UrlWithParsedQuery } from 'node:url';
import { UrlWithStringQuery } from 'url';
import { parse } from 'url';

export class Utils {
  public static getUrlBasePath(url: string | undefined): string {
    if (url) {
      const parsedUrl = parse(url);
      return parsedUrl.pathname!.split('/')[1];
    } else {
      return '';
    }
  }

  public static getUrlQuery(
    url: string | undefined
  ): UrlWithParsedQuery | undefined {
    if (url) {
      return parse(url, true);
    } else {
      return undefined;
    }
  }
}
