/// <reference types="Cypress" />
import CommonObject from '../../common/CommonObject';

const comObj = CommonObject.getInstance();

describe('Sign Up Test Suite', function () {
  beforeEach(function () {
    cy.fixture('Miro').then(function (data) {
      this.data = data;
      cy.visit(data.url);
    });
  });

  it('Registration Flow', function () {
    comObj.addDetails(this.data.name, this.data.workEmail, this.data.password);
    comObj.agreeTerms();
    comObj.clickStartNowButton();
    comObj.validateCheckEmail();
  });

});