
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=d8c30871-b035-4e2c-98ae-813214d12aac&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=d8c30871-b035-4e2c-98ae-813214d12aac&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      