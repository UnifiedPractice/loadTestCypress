
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=dde7fda5-2112-49fc-aa72-b7d8ad8d034f&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=dde7fda5-2112-49fc-aa72-b7d8ad8d034f&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      