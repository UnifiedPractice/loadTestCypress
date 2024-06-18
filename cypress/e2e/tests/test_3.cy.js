
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=297fbb33-9cd2-493e-a495-26c27eec2781&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=297fbb33-9cd2-493e-a495-26c27eec2781&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Sign in to Unified Practice').should('be.visible');

          });
        });
      