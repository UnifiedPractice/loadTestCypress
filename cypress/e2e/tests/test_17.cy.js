
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=66c9dd27-d0dd-4039-a0e9-dc75a02cf70f&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=66c9dd27-d0dd-4039-a0e9-dc75a02cf70f&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      