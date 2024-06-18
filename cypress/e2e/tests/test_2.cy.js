
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=7dfe2826-044d-4f29-915b-5313d3e821f1&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=7dfe2826-044d-4f29-915b-5313d3e821f1&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      