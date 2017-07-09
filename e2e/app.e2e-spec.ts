import { MytestAngularPage } from './app.po';

describe('mytest-angular App', () => {
  let page: MytestAngularPage;

  beforeEach(() => {
    page = new MytestAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
