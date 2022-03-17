describe('cypress studio demo',function(){
    it('login test',function(){

    })

    /* ==== Test Created with Cypress Studio ==== */
    it('myfirstrecorded test', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://opensource-demo.orangehrmlive.com/');

        /* ==== Generated with Cypress Studio ==== */
        cy.get('#txtUsername').clear();
        cy.get('#txtUsername').type('Admin');
        cy.get('#txtPassword').clear();
        cy.get('#txtPassword').type('admi123');
        cy.get('#btnLogin').click();
        cy.get('#divUsername > .form-hint').click();
        cy.get('#txtUsername').clear();
        cy.get('#txtUsername').type('Admin');
        cy.get('#txtPassword').clear();
        cy.get('#txtPassword').type('admin123');
        cy.get('#btnLogin').click();
        cy.get(':nth-child(1) > .quickLaunge > a > img').click();
        cy.get('#assignleave_txtEmployee_empName').clear();
        cy.get('#assignleave_txtEmployee_empName').type('Hira');
        cy.get('#assignleave_txtLeaveType').select('8');
        cy.get(':nth-child(4) > .ui-datepicker-trigger').click();
        cy.get('.ui-state-fullday > .ui-state-default').click();
        cy.get('#assignleave_txtComment').click();
        cy.get('.largeTextBox').click();
        cy.get('#assignBtn').click();
        cy.get('#assignleave_txtEmployee_empName').clear();
        cy.get('#assignleave_txtEmployee_empName').type('h');
        cy.get(':nth-child(7) > ul > .ac_over').click();
        cy.get('#assignBtn').click();
        cy.get('#confirmOkButton').click();
        /* ==== End Cypress Studio ==== */
    });
})