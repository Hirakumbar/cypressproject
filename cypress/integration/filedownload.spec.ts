/// <reference types="cypress-downloadfile"/>
describe('file upload tests',function(){

    it('file download demo',function(){
        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
    
    })

})