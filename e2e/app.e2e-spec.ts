import { TwoPLUGSwebPage } from './app.po';

describe('two-plugsweb App', function() {
  let page: TwoPLUGSwebPage;

  beforeEach(() => {
    page = new TwoPLUGSwebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
