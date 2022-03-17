it('learning assertion',function(){

 cy.visit('https://example.cypress.io/')
    
cy.get('#query-btn',{timeout:9000}).should('contain','button')
.should('have.class','query-btn')

})