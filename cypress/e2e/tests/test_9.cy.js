
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=75ad37ff-76f4-4d31-a841-5290182ba296&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=75ad37ff-76f4-4d31-a841-5290182ba296&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Sign in to Unified Practice').should('be.visible');

          });
        });
      