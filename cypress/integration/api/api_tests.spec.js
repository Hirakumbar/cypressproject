describe ('all api tests', function(){
    it('GET 1', () => {
         cy.request('GET','https://reqres.in/api/users?page=2')
         .then((Response)=> {
             expect(Response).to.have.property('status', 200);
             expect(Response.status).to.equal(200);
             expect(Response.body).not.to.be.null;
             expect(Response.body).to.have.property('page',2);
             expect(Response.body.data).to.have.length(6);
         })
 })
 it('GET 2', () => {
    cy.request('GET','https://reqres.in/api/users?page=2').as('user_list')
    
    cy.get('@user_list')
    .should ((Response)=> {
             expect(Response).to.have.property('status', 200);
             expect(Response.status).to.equal(200);
             expect(Response.body).not.to.be.null;
             expect(Response.body).to.have.property('page',2);
             expect(Response.body.data).to.have.length(6);
             })
   })

   it('POST 1', () => {
       cy.request({
           'method' : 'POST',
           'url': 'https://reqres.in/api/users',
            body : 
                {
                    "name": "HIra",
                    "job": "QA"
                    
                }
            }).then((Response) => {
                expect(Response).to.have.property('status', 201);
             expect(Response.status).to.equal(201);
             expect(Response.body).not.to.be.null;
             expect(Response.body).to.have.property('name','HIra');



            })
                

           })

           it('POST 2', () => {
            const reqBody = 
                {
                    "name": "HIra",
                    "job": "QA"
                
            };
            cy.request('POST', 'https://reqres.in/api/users',reqBody)
        .then((Response) => {
            expect(Response).to.have.property('status', 201);
         expect(Response.status).to.equal(201);
         expect(Response.body).not.to.be.null;
         expect(Response.body).to.have.property('name','HIra');


       })
   
    })
    it('PUT 2', () => {

        cy.request({
            'method' : 'PUT',
            'url': 'https://reqres.in/api/users/2',
             body : {
                "name": "morpheus",
                "job": "zion resident"
            }

})

    })
})

    it('DELETE ', () => {

        cy.request('DELETE', 'https://reqres.in/api/users/2')
        .then((Response) => {
            expect(Response.status).to.be.equal(204);
    

     
})
    })