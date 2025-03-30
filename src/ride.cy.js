describe('Ride Component Tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000'); // Update if using a different port
    });
  
    it('should render the ride form', () => {
      cy.get('form.ride-form').should('exist');
    });
  
    it('should allow the user to fill the ride form', () => {
      cy.get('input[name="name"]').type('John Doe');
      cy.get('input[name="locationFrom"]').type('LPU Gate 1');
      cy.get('input[name="locationTo"]').type('Phagwara Station');
      cy.get('input[name="date"]').type('2025-04-01');
      cy.get('input[name="time"]').type('12:00');
      cy.get('input[name="registrationNumber"]').type('PB10AB1234');
      cy.get('input[name="contact"]').type('9876543210');
      cy.get('select[name="paymentMethod"]').select('Cash');
    });
  
    it('should submit the ride form and show a success message', () => {
      cy.intercept('POST', 'http://localhost:5000/addRide', {
        statusCode: 200,
        body: { success: true },
      }).as('addRide');
  
      cy.get('form.ride-form').submit();
      cy.wait('@addRide');
  
      cy.contains('Ride added successfully!').should('exist');
    });
  
    it('should display upcoming rides when the button is clicked', () => {
      cy.intercept('GET', 'http://localhost:5000/getRides', {
        statusCode: 200,
        body: [
          {
            _id: '1',
            name: 'John Doe',
            locationFrom: 'LPU',
            locationTo: 'Jalandhar',
            date: '2025-04-01',
            time: '10:00 AM',
            registrationNumber: 'PB10XYZ1234',
            contact: '9876543210',
            paymentMethod: 'UPI'
          }
        ],
      }).as('getRides');
  
      cy.contains('Upcoming Ride').click();
      cy.wait('@getRides');
  
      cy.contains('Upcoming Rides').should('exist');
      cy.contains('Ride from LPU to Jalandhar').should('exist');
      cy.contains('John Doe').should('exist');
    });
  
    it('should show an error message when form submission fails', () => {
      cy.intercept('POST', 'http://localhost:5000/addRide', {
        statusCode: 500,
        body: { success: false },
      }).as('addRideFail');
  
      cy.get('form.ride-form').submit();
      cy.wait('@addRideFail');
  
      cy.contains('Error adding ride').should('exist');
    });
  });
  