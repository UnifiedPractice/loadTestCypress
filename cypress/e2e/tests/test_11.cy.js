
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=f626e425-1955-4491-a2a8-7b453b89bedd&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=f626e425-1955-4491-a2a8-7b453b89bedd&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Sign in to Unified Practice').should('be.visible');

          });
        });
      