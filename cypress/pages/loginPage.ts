import { CommonPage } from './CommonPage';

const commonPage = new CommonPage();

export class LoginPage {

  public loadSemantics(){
     commonPage.locateShadow().find('flt-semantics-placeholder').first().click({ force: true });
  }

}
