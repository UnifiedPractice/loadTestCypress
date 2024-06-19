
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=4b33c15c-e3d2-4205-9d54-21595055cf84&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=4b33c15c-e3d2-4205-9d54-21595055cf84&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      