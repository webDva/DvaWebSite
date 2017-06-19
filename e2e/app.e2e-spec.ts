import { DvaWebSitePage } from './app.po';

describe('dva-web-site App', () => {
  let page: DvaWebSitePage;

  beforeEach(() => {
    page = new DvaWebSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
