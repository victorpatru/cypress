/// <reference types="cypress" />

describe('Create a New Item', () => {
  beforeEach(() => {
    cy.visit('/jetsetter');
  });

  it('should have a form', () => {
    cy.get('form').should('exist');
  });

  it('should have the word "Add Item"', () => {
    cy.contains('Add Item');
  });

  it('should put stuff in an input field', () => {
    cy.get('[data-test="new-item-input"]').type('Good Vibes');
  });

  it('should marked everything as unpacked', () => {
    cy.get('[data-test="mark-all-as-unpacked"]').click();
  });
});
