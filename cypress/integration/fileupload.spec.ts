describe('file upload tests',function(){

    it('file upload demo',function(){
    cy.visit('https://filebin.net/')
    cy.get('#fileField').attachFile('photo.png')
    //cy.get('tbody > tr > :nth-child(1)')
    })

})