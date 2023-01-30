/// <reference types="cypress" />

describe('Basic Practice', () => {
  beforeEach(() => {
    cy.visit('/jetsetter');
  });

  // @TODO: RECHECK THIS
  describe('Adding a new item', () => {
    it('should put a new item on the page after clicking on "Add Item"', () => {
      cy.get('[data-test="new-item-input"]').type('Mosquito Spray');
      cy.get('[data-test="add-item"]').click();
    });

    it('should put a new item in the "Unpacked Items" list', () => {
      cy.get('#item-1').click();
    });

    it('should put a new item as the last item in the "Unpacked Items" list', () => {
      cy.get('[data-test="new-item-input"]').type('Mosquito Spray');
      cy.get('[data-test="add-item"]').click();
      cy.get('[data-test="items-unpacked"]').last().should('contain.text', 'Tooth Brush');
    });
  });

  describe('Filtering items', () => {
    it('should show items that match whatever is in the filter field', () => {
      cy.get('[data-test="filter-items"]').type('tooth');
      cy.get('[data-test="items-unpacked"]').should('contain.text', 'Tooth Brush');
    });

    it('should hide items that do not match whatever is in the filter field', () => {
      cy.get('[data-test="filter-items"]').type('tooth');
      cy.get('[data-test="items-unpacked"]').should('not.contain.text', 'iPhone Charger');
    });
  });

  describe('Removing items', () => {
    describe('Remove all', () => {
      it('should remove all of the items', () => {
        cy.get('[data-test="remove-all"]').click();
        cy.get('[data-test="items-empty-state"]').should('exist');
      });
    });

    describe('Remove individual items', () => {
      it('should have a remove button on an item', () => {
        cy.get(':nth-child(4) > [data-test="remove"]').should('exist');
      });

      it('should remove an item from the page', () => {
        cy.get(':nth-child(4) > [data-test="remove"]').click();
        cy.get(':nth-child(4) > [data-test="remove"]').should('not.exist');
      });
    });
  });

  describe('Mark all as unpacked', () => {
    it('should empty out the "Packed" list', () => {
      cy.get('[data-test="mark-all-as-unpacked"]').click();
      cy.get('[data-test="items-empty-state"]').should('exist');
    });

    it('should have all of the items in the "Unpacked" list', () => {
      cy.get('[data-test="mark-all-as-unpacked"]').click();
      cy.get('[data-test="items-unpacked"] > ul.s-vF8tIk32PFgu')
        .children()
        .should('have.length', 5);
    });
  });

  describe('Mark individual item as packed', () => {
    it('should move an individual item from "Unpacked" to "Packed"', () => {
      cy.get('#item-4').click();
      cy.get(
        '[data-test="items-packed"] > ul.s-vF8tIk32PFgu > :nth-child(1) > label.s-vF8tIk32PFgu',
      ).should('contain.text', 'iPhone Charger');
    });
  });
});
