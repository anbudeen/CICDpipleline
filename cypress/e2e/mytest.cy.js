describe("Login",()=>{
    it("Validation of user login",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('contain','OrangeHRM')
    })
})