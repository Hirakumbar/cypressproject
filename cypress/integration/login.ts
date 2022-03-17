it('Orange HR test',function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/')

    /* ==== Generated with Cypress Studio ==== */
    cy.get('#divUsername > .form-hint').click();
    cy.get('#txtUsername').clear();
    cy.get('#txtUsername').type('Admin');
    cy.get('#txtPassword').clear();
    cy.get('#txtPassword').type('admin123');
    cy.get('#btnLogin').click();
    cy.get(':nth-child(4) > .quickLaunge > a > .quickLinkText').click();
    cy.get('#menu_time_viewTimeModule > b').click();
    cy.get('#employee').clear();
    cy.get('#employee').type('tes');
    cy.get('.ac_even').click();
    cy.get('#employee').clear();
    cy.get('#employee').type('Orange Test');
    cy.get('strong').click();
    cy.get('#btnView').click();
    cy.get('#btnAddTimesheet').click();
    cy.get('.ui-datepicker-trigger').click();
    cy.get('.ui-datepicker-days-cell-over > .ui-state-default').click();
    cy.get('#btnSubmit').click();
    /* ==== End Cypress Studio ==== */
})