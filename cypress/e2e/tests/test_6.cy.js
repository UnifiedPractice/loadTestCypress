
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=ef5d63ad-d7f5-4663-90e3-41bf887583a3&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=ef5d63ad-d7f5-4663-90e3-41bf887583a3&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Sign in to Unified Practice').should('be.visible');

          });
        });
      