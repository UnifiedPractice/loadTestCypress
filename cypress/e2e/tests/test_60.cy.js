
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=f18aad97-0ade-401a-9e80-d915804a5c81&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=f18aad97-0ade-401a-9e80-d915804a5c81&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      