import { TwoplugsPage } from './app.po';

describe('twoplugs App', function() {
  let page: TwoplugsPage;

  beforeEach(() => {
    page = new TwoplugsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
