describe('Lost & Found Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('Loads the Lost & Found page', () => {
      cy.contains('Lost & Found').should('be.visible');
    });
  
    it('Allows user to submit a lost item', () => {
      cy.get('input[name="itemName"]').type('Bag');
      cy.get('textarea[name="description"]').type('Black leather bag');
      cy.get('input[name="location"]').type('Classroom 101');
      cy.get('input[name="contact"]').type('9876543210');
  
      cy.intercept('POST', 'http://localhost:5000/api/lostitems', {
        statusCode: 200,
        body: { id: 3, type: 'lost', itemName: 'Bag', description: 'Black leather bag', location: 'Classroom 101', contact: '9876543210' }
      }).as('postItem');
  
      cy.get('button').contains('Post').click();
      cy.wait('@postItem');
  
      cy.contains('Bag').should('be.visible');
    });
  
    it('Filters lost items', () => {
      cy.intercept('GET', 'http://localhost:5000/api/lostitems', {
        statusCode: 200,
        body: [
          { id: 1, type: 'lost', itemName: 'Phone', description: 'iPhone', location: 'Cafeteria', contact: '1234567890' },
          { id: 2, type: 'found', itemName: 'Watch', description: 'Gold watch', location: 'Library', contact: '9876543210' }
        ]
      }).as('getItems');
  
      cy.get('button').contains('Lost Items').click();
      cy.wait('@getItems');
  
      cy.contains('Phone').should('be.visible');
      cy.contains('Watch').should('not.exist');
    });
  });
  