import {locators} from '../ObjectRepository/WebLocators';
import {randomString} from '../common/HelperUtils'

class CommonObject {
  private static instance: CommonObject;

  private constructor() {}

  static getInstance(): CommonObject {
    if (!CommonObject.instance) {
      CommonObject.instance = new CommonObject();
    }

    return CommonObject.instance;
  }

  concatId(addId: string) {
    addId = '[id="' + addId + '"]';
    return addId;
  }

  concatDataTestId(addTestId: string) {
    addTestId = '[data-testid="' + addTestId + '"]';
    return addTestId;
  }

  addDetails(name: string, workEmail:string, password: string) {
    const emailId = randomString();
    cy.log('Adding user details');
    cy.get(this.concatId(locators.commonLocators.name)).should('be.visible').log('Name text box is visible on sign up page');
    cy.get(this.concatId(locators.commonLocators.name)).type(name).log('Name is entered successfully');
    cy.get(this.concatId(locators.commonLocators.email)).type(emailId + workEmail).log('Work email is entered successfully');
    cy.get(this.concatId(locators.commonLocators.password)).type(password).log('Password is entered successfully');
  }

  agreeTerms() {
    cy.log('Selecting terms');
    cy.get(this.concatId(locators.commonLocators.agreeTerms)).check({ force: true }).log('Terms is selected successfully');
    cy.get(this.concatId(locators.commonLocators.agreeNews)).check({ force: true }).log('News checkbox is selected successfully');
  }

  clickStartNowButton() {
    cy.log('Clicking Start Now Button');
    cy.get(this.concatDataTestId(locators.commonLocators.startNowButton)).click().log('Start now button is clicked successfully');
  }

  validateCheckEmail() {
    cy.log('Validating that user is redirected to check your email page');
    cy.get(this.concatId(locators.commonLocators.code)).should('be.visible').log('User is redirected to check your email page successfully');
  }

}
export default CommonObject;
