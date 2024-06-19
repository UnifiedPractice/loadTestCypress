
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=6ff0fde3-454f-4b5e-a3aa-cb929a3f3088&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=6ff0fde3-454f-4b5e-a3aa-cb929a3f3088&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      