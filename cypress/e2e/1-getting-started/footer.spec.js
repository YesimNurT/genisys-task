// Yesim Nur Tortop


beforeEach(() => {
  cy.visit('https://web.cloudmore.com/');
});

describe('Footer', () => {
  it('Check footer elements', function () {
    cy.get(':nth-child(1) > .box > .col-nav__col > .col-nav__title > a').should(
      'have.text',
      'Solutions',
    );
    cy.get(':nth-child(2) > .box > .col-nav__col > .col-nav__title > a').should(
      'have.text',
      'Products',
    );
    cy.get(':nth-child(3) > .box > .col-nav__col > .col-nav__title > a').should(
      'have.text',
      'Resources',
    );
    cy.get(':nth-child(4) > .box > .col-nav__col > .col-nav__title > a').should(
      'have.text',
      'Company',
    );
  });

  //   it('Check footer social media', function () {
  //     cy.get('[id="hs_cos_wrapper_footer_icons"]  > div > div >div >a').each(($el)=>{
  //         cy.wrap($el).should('have.attr','href')
  //     })

  //   });
  it('check twitter', () => {
    cy.get('[id="hs_cos_wrapper_footer_icons"]  > div > div >div >a:nth-child(1)')
      .should('have.attr', 'href')
      .and('contain', 'twitter');
  });
  it('check youtube', () => {
    cy.get('[id="hs_cos_wrapper_footer_icons"]  > div > div >div >a:nth-child(2)')
      .should('have.attr', 'href')
      .and('contain', 'youtube');
  });
  it('check linkedin', () => {
    cy.get('[id="hs_cos_wrapper_footer_icons"]  > div > div >div >a:nth-child(3)')
      .should('have.attr', 'href')
      .and('contain', 'linkedin');
  });

  it.only('are subsections visible', function () {
    cy.get(':nth-child(4) > .box > .col-nav__col > .col-nav__list > :nth-child(1) > .col-nav__link')
      .should('be.visible')
      .and('contain', 'About us');
    cy.get(':nth-child(4) > .box > .col-nav__col > .col-nav__list > :nth-child(4) > .col-nav__link')
      .should('be.visible')
      .and('contain', 'Contact us');
  });
});
