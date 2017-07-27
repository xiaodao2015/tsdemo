import { TypeScriptDemoPage } from './app.po';

describe('type-script-demo App', () => {
  let page: TypeScriptDemoPage;

  beforeEach(() => {
    page = new TypeScriptDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
