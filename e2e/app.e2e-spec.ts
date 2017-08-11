import { ScssProjectPage } from './app.po';

describe('scss-project App', () => {
  let page: ScssProjectPage;

  beforeEach(() => {
    page = new ScssProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
