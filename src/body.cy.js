describe('Body Component Tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000'); // Adjust if using a different port
    });
  
    it('should render the search input field', () => {
      cy.get('input[placeholder="Search for a book..."]').should('exist');
    });
  
    it('should filter book list based on search input', () => {
      cy.get('input[placeholder="Search for a book..."]').type('PEA');
      cy.contains('PEA306').should('exist');
      cy.contains('PEA305').should('exist');
    });
  
    it('should open the form when clicking BUY', () => {
      cy.contains('BUY').first().click();
      cy.contains('BUY Details for').should('exist');
    });
  
    it('should submit the form and display success message', () => {
      cy.contains('BUY').first().click();
      
      cy.get('input[name="name"]').type('John Doe');
      cy.get('input[name="regno"]').type('12345');
      cy.get('input[name="year"]').type('3');
      cy.get('input[name="phone"]').type('9876543210');
  
      cy.intercept('POST', 'http://localhost:5000/api/add-transaction', {
        statusCode: 200,
        body: { success: true },
      }).as('submitTransaction');
  
      cy.contains('Confirm').click();
      cy.wait('@submitTransaction');
  
      cy.contains('Your data has been successfully stored!').should('exist');
    });
  
    it('should show an error message when the API call fails', () => {
      cy.contains('BUY').first().click();
  
      cy.get('input[name="name"]').type('John Doe');
      cy.get('input[name="regno"]').type('12345');
      cy.get('input[name="year"]').type('3');
      cy.get('input[name="phone"]').type('9876543210');
  
      cy.intercept('POST', 'http://localhost:5000/api/add-transaction', {
        statusCode: 500,
        body: { success: false },
      }).as('submitTransaction');
  
      cy.contains('Confirm').click();
      cy.wait('@submitTransaction');
  
      cy.contains('There was an error storing your data. Please try again.').should('exist');
    });
  });
  


  