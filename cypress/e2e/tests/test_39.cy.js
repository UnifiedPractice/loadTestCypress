
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=5c418a33-d35d-4923-b38a-bc5c11b2c819&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=5c418a33-d35d-4923-b38a-bc5c11b2c819&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      