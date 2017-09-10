import { DemoNgRxPage } from './app.po';

describe('demo-ng-rx App', () => {
  let page: DemoNgRxPage;

  beforeEach(() => {
    page = new DemoNgRxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
