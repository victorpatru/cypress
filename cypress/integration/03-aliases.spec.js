/// <reference types="cypress" />

describe('Aliases', () => {
  beforeEach(() => {
    cy.visit('/jetsetter');
    cy.get('[data-test="filter-items"]').as('filterItems');
  });

  it('should put a new item on the page after clicking on "Add Item"', () => {
    cy.get('@filterItems').type('Tooth');

    cy.get('[data-test="items-unpacked"]').should('contain.text', 'Tooth Brush');
  });
});
