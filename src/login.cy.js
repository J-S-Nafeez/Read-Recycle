describe('Login Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('Loads the Login page and switches to Register', () => {
      cy.contains('User Login').should('be.visible');
      cy.contains('Register').click();
      cy.contains('User Registration').should('be.visible');
    });
  
    it('Allows user to log in', () => {
      cy.get('input[name="regNo"]').type('12345');
      cy.get('input[name="phone"]').type('9876543210');
  
      cy.intercept('POST', 'http://localhost:5000/login', {
        statusCode: 200,
        body: { message: 'Login Successful' }
      }).as('login');
  
      cy.get('button').contains('Login').click();
      cy.wait('@login');
  
      cy.contains('Login Successful').should('be.visible');
    });
  
    it('Displays error message on failed login', () => {
      cy.get('input[name="regNo"]').type('12345');
      cy.get('input[name="phone"]').type('9876543210');
  
      cy.intercept('POST', 'http://localhost:5000/login', {
        statusCode: 400,
        body: { error: 'Invalid credentials' }
      }).as('loginFail');
  
      cy.get('button').contains('Login').click();
      cy.wait('@loginFail');
  
      cy.contains('Invalid credentials').should('be.visible');
    });
  
    it('Allows user to register', () => {
      cy.contains('Register').click();
  
      cy.get('input[name="name"]').type('John Doe');
      cy.get('input[name="regNo"]').type('12345');
      cy.get('input[name="phone"]').type('9876543210');
      cy.get('select[name="year"]').select('3rd Year');
  
      cy.intercept('POST', 'http://localhost:5000/register', {
        statusCode: 200,
        body: { message: 'Registration Successful' }
      }).as('register');
  
      cy.get('button').contains('Register').click();
      cy.wait('@register');
  
      cy.contains('Registration Successful').should('be.visible');
    });
  });
  

  