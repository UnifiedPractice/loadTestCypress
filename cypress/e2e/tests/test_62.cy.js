
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=8096445c-cb8f-4d6e-b7df-b77cd17f30eb&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=8096445c-cb8f-4d6e-b7df-b77cd17f30eb&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      