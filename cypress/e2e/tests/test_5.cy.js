
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=3d7466be-25c1-4c9c-b635-ce6de93b8da5&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=3d7466be-25c1-4c9c-b635-ce6de93b8da5&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      