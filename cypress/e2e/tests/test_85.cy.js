
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=02459325-4792-426f-9101-bbb2dc9c2d33&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=02459325-4792-426f-9101-bbb2dc9c2d33&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      