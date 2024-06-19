
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=590d0e21-5997-4811-a3e8-5ccac581d892&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=590d0e21-5997-4811-a3e8-5ccac581d892&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      