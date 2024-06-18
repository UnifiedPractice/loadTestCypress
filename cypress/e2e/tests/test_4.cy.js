
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=d6057542-a2a8-41a0-97fe-6e4757059d8a&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=d6057542-a2a8-41a0-97fe-6e4757059d8a&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Sign in to Unified Practice').should('be.visible');

          });
        });
      