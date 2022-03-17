it('dummy login test',function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('[for="radio1"]').click()
    cy.get('#autocomplete').type('india').click()
    
    

    })