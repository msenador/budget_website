context('Sign Up', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('should not let user sign up with invalid email', () => {
        cy.get('input[name="email-input"]').type('tigerKing');
        cy.get('input[name="password-input"]').type('12345678');
        cy.get('button[name="signup-button"]').click();
        
        cy.get('div[name="email-error"]').should(
            "have.text",
            "*Invalid Email"
        );
    });

    it('should not let user sign up if password is less than 6 characters', () => {
        cy.get('input[name="email-input"]').type('tigerKing@yahoo.com');
        cy.get('input[name="password-input"]').type('123');
        cy.get('button[name="signup-button"]').click();
        
        cy.get('div[name="password-error"]').should(
            "have.text",
            "*Password should be at least 6 characters"
        );
    })

    it('should not let user sign up if email is already taken', () => {
        cy.get('input[name="email-input"]').type('test@yahoo.com');
        cy.get('input[name="password-input"]').type('12345678');
        cy.get('button[name="signup-button"]').click();
        
        cy.get('div[name="email-error"]').should(
            "have.text",
            "*The email address is already in use by another account."
        );
    })
});