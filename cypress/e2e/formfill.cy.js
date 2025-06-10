
/// <reference types='cypress' />

describe('form fill',()=>[
    it("validate the form fill using checkbox,dropdown and select",()=>{
        cy.visit('https://practice-automation.com/')

        cy.get(':nth-child(2) > :nth-child(2) > .wp-block-button > .wp-block-button__link').should('be.visible').click()
        const nametxt='Test' + Math.floor(Math.random()*1000)
        cy.get("#name-input").type(nametxt).should('be.visible')
        
        cy.get('input[type="password"]').type('admin123')

        cy.get('input[type="checkbox"]').check(['Water','Coffee','Wine']).should('be.checked')
        cy.get('#color4').check().should('be.checked')
        cy.get('[data-cy="automation"]').select('Yes')
         cy.get('[data-cy="automation"]').should('have.value','yes')
        //cy.get('[data-testid="automation-yes"]').select('Yes').should('be.selected')

        const emailtxt='test'+Math.floor(Math.random()*1000) +'@gmail.com'
        cy.get("#email").type(emailtxt)

        cy.fixture('formmessage.json').then((data)=>{
            cy.get("#message").type(data.message)
            cy.btn()
        })
    })
])
