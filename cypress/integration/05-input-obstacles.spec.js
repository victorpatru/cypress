/// <reference types="cypress" />

describe('Input obstacles', () => {
  beforeEach(() => {
    cy.visit('/obstacle-course');
  });

  it('should input text into the input field', () => {
    const thought = 'Ravioli are a form of pop tart.';

    cy.get('[data-test="text-input"]').type(thought);
    cy.get('[data-test="text-result"]').contains(thought);
  });

  it('should control a select input', () => {
    const avenger = 'Hulk';

    cy.get('[data-test="select-input"]').select(avenger);
    cy.get('[data-test="select-result"]').should('contain.text', avenger);
  });

  it('should find and control a checkbox input', () => {
    const favoriteTopping = 'Tomato';

    cy.get('[data-test="checkbox-result"]').contains('(None)');
    cy.get('[data-test="checkbox-tomato"]').check();
    cy.get('[data-test="checkbox-result"]').should('contain.text', favoriteTopping);
  });

  it('should find and control a radio input', () => {
    const favoriteBeatle = 'Ringo';

    cy.get('[data-test="radio-ringo"]').check();
    cy.get('[data-test="radio-result"]').should('contain.text', favoriteBeatle);
  });

  it('should find and control a color input', () => {
    const colorValue = '#874545';

    cy.get('[data-test="color-input"]').click().invoke('val', colorValue).trigger('input');
    cy.get('[data-test="color-result"]').should('contain.text', colorValue);
  });

  it('should find and control a date input', () => {
    const chosenDate = '1999-12-31';

    cy.get('[data-test="date-input"]').type(chosenDate);
    cy.get('[data-test="date-result"]').should('contain.text', chosenDate);
  });

  it('should find and control a range input', () => {
    cy.get('[data-test="range-input"]').invoke('val', '7').trigger('input');
    cy.get('[data-test="range-result"]').should('contain.text', '7');
  });

  it('should find and control a file input', () => {
    cy.get('[data-test="file-input"]');
    cy.get('[data-test="file-result"]');
  });
});
