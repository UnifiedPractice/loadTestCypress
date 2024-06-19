
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=425633b0-54a1-445f-bcaf-8b38a5000a1a&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=425633b0-54a1-445f-bcaf-8b38a5000a1a&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      