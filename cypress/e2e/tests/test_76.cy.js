
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=1a634736-f250-4de4-9e62-c5342e64c4b1&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=1a634736-f250-4de4-9e62-c5342e64c4b1&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      