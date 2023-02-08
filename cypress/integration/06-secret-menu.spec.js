/// <reference types="cypress" />

const restaurants = [
  'McDonalds',
  'In-N-Out',
  'KFC',
  'Jack In The Box',
  'Jamba Juice',
  'Starbucks',
  'Dairy Queen',
  'Burger King',
  'Chipotle',
  'Taco Bell',
  'Five Guys',
  'Sonic',
  'Subway',
  'Panera Bread',
];

const properties = [
  'name',
  'whereToOrder',
  'description',
  'secret',
  'ingredients',
  'popularity',
  'price',
  'howToOrder',
];

const ratings = [1, 2, 3, 4, 5, 6, 7];

describe('Secret Menu Items', () => {
  beforeEach(() => {
    cy.visit('/secret-menu');
  });

  it('should exist have the title on the page', () => {
    cy.get('h1').should('contain', 'Secret Menu Items');
  });

  for (const property of properties) {
    it(`should check whether ${property} column is on our page`, () => {
      cy.get(`#${property}-column`).should('exist');
    });

    it(`should not show ${property} in the table if it's unchecked`, () => {
      cy.get(`#show-${property}`).uncheck();
      cy.get(`#${property}-column`).should('not.be.visible');
    });
  }

  for (const restaurant of restaurants) {
    // Check they exist on the page
    it(`should check ${restaurant} exists on the page`, () => {
      cy.get('table').contains(restaurant);
    });

    // Choose one and check another one doesn't exist
    it(`should check whether selecting ${restaurant} `, () => {
      cy.get('#restaurant-visibility-filter').select(restaurant);
      cy.get('table').should('not.have.value', 'Chick-fil-A');
    });
  }

  for (const rating of ratings) {
    it.only(`should check whether selecting rating "${rating}" displays only items with that rating`, () => {
      cy.get('#minimum-rating-visibility').invoke('val', rating).trigger('input');
      cy.get('table').should('contain.text', rating);
    });

    it;
  }
});
