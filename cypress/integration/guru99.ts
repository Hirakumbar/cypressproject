it('guru99 test',function(){
cy.visit('https://clicks.aweber.com/y/ct/?l=N2oUE&m=3_dx7v7KqxQLjy9&b=Vk9Twz1lUZjBCQs5.ATtpA')
cy.get('.nav-1 > .level0').click()
cy.wait(2000) // wait for 2 seconds
cy.get('.category-products > :nth-child(1) > .sorter > .sort-by > select').select('Name')
cy.get(':nth-child(2) > .product-info > .actions > .button > :nth-child(1) > span').click()



    
})