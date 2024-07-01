
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=1f242fd7-c339-467a-8f8d-40c9798b14aa&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=1f242fd7-c339-467a-8f8d-40c9798b14aa&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      