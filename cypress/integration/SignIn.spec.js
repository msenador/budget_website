context('Sign In', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('should display Sign In page when user clicks toggle button', () => {
        cy.get('h1[name="signup-header"]').should('have.text', 'SIGN UP');
        cy.get('button[name="signin-toggle"]').click();
        cy.get('h1[name="signup-header"]').should('have.text', 'SIGN IN');
    })

    it('should not let user sign in if user does not exits', () => {
        cy.get('button[name="signin-toggle"]').click();
        cy.get('input[name="email-input"]').type('tigerKing@yahoo.com');
        cy.get('input[name="password-input"]').type('12345678');
        cy.get('button[name="signin-button"]').click();
        
        cy.get('div[name="email-error"]').should(
            "have.text",
            "*User not found"
        );
    })

    it('should not let user sign in if password is wrong', () => {
        cy.get('button[name="signin-toggle"]').click();
        cy.get('input[name="email-input"]').type('test@yahoo.com');
        cy.get('input[name="password-input"]').type('12345678');
        cy.get('button[name="signin-button"]').click();
        
        cy.get('div[name="password-error"]').should(
            "have.text",
            "*Wrong password"
        );
    })
})