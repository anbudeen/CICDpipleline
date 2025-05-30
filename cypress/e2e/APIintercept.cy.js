/// <reference types='cypress' />

describe("API intercept concepts",function(){
    it("validate the api responses",()=>{
        cy.visit("https://plausible.io")
        cy.intercept('GET','/register').as('intercep')
        cy.get("a[class='flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent leading-6 rounded-md hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10']").click()
        cy.wait('@intercep')
    })

     it.only("validate the api limit responses",()=>{
        cy.visit("https://dummyapi.io/explorer")
        cy.intercept('/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10' ).as('intercep')
       cy.get('.flex > :nth-child(5)').click()
         //cy.request('POST', '/register', { email: 'aleena@test.com' });
  cy.wait('@intercep').then((interception) => {
    expect(interception.response.body.limit).to.equal(10);
        })
          
    })

     it.only("validate the api limit and name responses",()=>{
        cy.visit("https://dummyapi.io/explorer")
        cy.intercept('/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10',{limit:20,name:'aleena'} ).as('intercep')
       cy.get('.flex > :nth-child(5)').click()
         //cy.request('POST', '/register', { email: 'aleena@test.com' });
  cy.wait('@intercep').then((interception) => {
    expect(interception.response.body.limit).to.equal(20);
    expect(interception.response.body.name).to.equal('aleena');
        })
          
    })

})