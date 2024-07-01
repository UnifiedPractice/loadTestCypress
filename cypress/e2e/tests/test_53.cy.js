
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=0e04c4ef-be72-47d6-8d54-2391af430e86&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=0e04c4ef-be72-47d6-8d54-2391af430e86&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      