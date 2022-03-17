describe('read write file tests',()=>{
    beforeEach(function(){
        cy.fixture('example.json').as('data')
    })

    it('read file test using fixture',function(){
        cy.fixture('example.json')
        .its('name').should('eq','cypress')
        cy.log(this.data.name)
        cy.log(this.data.email)
    })
    it('read file ',function(){
        cy.readFile('./cypress/fixtures/example.json')
        .its('name').should('eq','cypress')
    })
    it('write file',function(){
        cy.writeFile('sample.txt', 'Hello, we are learning cypress')
        cy.writeFile('sample.txt', '\nHi i am Hira',{flag: 'a+'})
        cy.readFile('sample.txt',).should('contain','cypress')

    })

})