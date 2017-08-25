import { AngularMBAApplicationPage } from './app.po';

describe('angular-mba-application App', () => {
  let page: AngularMBAApplicationPage;

  beforeEach(() => {
    page = new AngularMBAApplicationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
